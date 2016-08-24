var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var npmPackage = require('../package.json')

var rootDir = path.resolve(__dirname, '..')
var srcDir = path.resolve(rootDir, 'src')
var jsDir = path.resolve(srcDir, 'js')

var PATHS = {
    root: rootDir,
    src: srcDir,
    js: jsDir,
    styles: path.resolve(srcDir, 'styles'),
    index: path.resolve(srcDir, 'index.html'),
    entry: path.resolve(jsDir, npmPackage.main || 'index.jsx'),
    build: path.resolve(rootDir, '__build__')
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
