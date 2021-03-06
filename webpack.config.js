const path = require('path');
const webpack = require("webpack");

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src') + '/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader?limit=100000'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 8100,
	}
};
