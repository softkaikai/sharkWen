var path = require('path');
var webpack = require('webpack');

var ENTRY = path.resolve(__dirname);
var OUTPUT = path.resolve(__dirname, './output');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ENTRY + '/src/app/app.js',
    output: {
        path: OUTPUT,
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ENTRY + 'node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                exclude: ENTRY + 'node_modules',
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-css.min.js',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			title: 'SHARK',
			template: 'index.html'
		})
    ]

};