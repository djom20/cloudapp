/*
    ./webpack.config.js
*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './public/index.html',
	filename: 'index.html',
	inject: 'body'
});

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin('styles.css')],
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.css/,
			loader: ExtractTextPlugin.extract('css-loader')
		},
		{
			test: /\.(?:png|jpg|svg)$/,
			loader: 'url-loader',
			query: {
				// Inline images smaller than 10kb as data URIs
				limit: 10000
			}
		}]
	}
};