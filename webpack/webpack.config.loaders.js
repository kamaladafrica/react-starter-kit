module.exports = [{
	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	loader: "file"
}, {
	test: /\.woff2?$/,
	loader: "url?limit=10000"
}, {
	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	loader: "url?limit=10000&mimetype=application/octet-stream"
}, {
	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	loader: "url?limit=10000&mimetype=image/svg+xml"
}, {
	test: /\.gif$/,
	loader: "url?limit=10000&mimetype=image/gif"
}, {
	test: /\.jpe?g$/,
	loader: "url?limit=10000&mimetype=image/jpg"
}, {
	test: /\.png$/,
	loader: "url?limit=10000&mimetype=image/png"
}, {
	test: /\.json$/,
	loader: "json"
}];