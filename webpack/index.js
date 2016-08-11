var production = process.env.NODE_ENV === 'production';

if(production){
	module.exports = require('./webpack.config.prod.js')
} else {
	module.exports = require('./webpack.config.dev.js')
}
