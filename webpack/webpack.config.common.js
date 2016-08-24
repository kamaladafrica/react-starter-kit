var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var npmPackage = require('../package.json')
var rootDir = path.resolve(__dirname, '..');

var PATHS = {
    root: rootDir,
    src: path.resolve(rootDir, 'src'),
    build: path.resolve(rootDir, '__build__'),
    js: path.resolve(rootDir, 'src/js'),
    styles: path.resolve(rootDir, 'src/styles'),
    index: path.resolve(rootDir, 'src/index.html'),
    entry: path.resolve(rootDir, 'src/js', npmPackage.main || '/index.jsx')
}

var config = {
    output: {
        path: PATHS.build,
        filename: '[name].[hash].js',
        chunkFilename: '[id].chunk.[chunkhash].js'
    },
    resolve: {
        root: PATHS.js,
        extensions: ['', '.js', '.jsx']
    },
    // Expose __dirname to allow automatically setting basename.
    context: rootDir,
    postcss: function() {
      return [
        require('postcss-import')({ // Import all the css files...
          glob: true,
          onImport: function (files) {
              files.forEach(this.addDependency); // ...and add dependecies from the main.css files to the other css files...
          }.bind(this) // ...so they get hot–reloaded when something changes...
        }),
        require('postcss-simple-vars')(), // ...then replace the variables...
        require('postcss-focus')(), // ...add a :focus to ever :hover...
        require('autoprefixer')({ // ...and add vendor prefixes...
          browsers: ['last 2 versions', 'IE > 8'] // ...supporting the last 2 major browser versions and IE 8 and up...
        }),
        require('postcss-reporter')({ // This plugin makes sure we get warnings in the console
          clearMessages: true
        })
      ];
    }
};

module.exports = { config: config, paths: PATHS }
