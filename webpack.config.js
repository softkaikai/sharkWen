var path = require('path');
var webpack = require('webpack');

var ENTRY = path.resolve(__dirname);
var OUTPUT = path.resolve(__dirname, './output');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [ENTRY + '/src/app/app.js'],
    output: {
        path: OUTPUT,
        filename: 'build.js'
    },
    module: {
        rules: [
            /*{
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },
                    {
                        loader: 'expose-loader', // 将$暴露为全局变量
                        options: '$'
                    }
                ]
            },*/
            {
                test: /\.js$/,
                exclude: ENTRY + 'node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.(scss|css)$/,
                exclude: ENTRY + 'node_modules',
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
			{
				test: /\.(png|jpg|gif)$/,
				use: [
                  {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]'
                    }
                  }
				]
			}
        ]
    },
    plugins: [
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-css.min.js',
        }),*/
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
			favicon: 'static/images/shark.ico',
			template: 'index.html'
		}),
        new webpack.DllReferencePlugin({
            context: __dirname,
            name: 'dllLib_library',
            manifest: require('./manifest.json'),
        }),
        new CopyWebpackPlugin(
            [
                {from:'./dllLib.dll.js', to: './dllLib.dll.js'}
            ]
        ),

    ]

};