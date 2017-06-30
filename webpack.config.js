var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helper')

module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './main.ts',
		vendor: './vendor.ts'
	},
	output: {
		path: __dirname + '/src/dist',
		filename: '[name].bundle.js'
	},
	resolve: {
    	extensions: ['.ts', '.js']
  	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: ['css-to-string-loader','css-loader']
      		}
		]
	},
	plugins: [
   		new webpack.optimize.CommonsChunkPlugin({
        	name: ['app','vendor']
    	}),

	    new ExtractTextPlugin('style.css')
  	]
};
