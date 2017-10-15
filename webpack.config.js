const path = require('path');
const webpack = require('webpack');

const ENTRY = path.resolve(__dirname);
const OUTPUT = path.resolve(__dirname, './output');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 4 });

module.exports = {
    entry: [ENTRY + '/src/app/app.js'],
    output: {
        path: OUTPUT,
        filename: 'build.js'
    },
    module: {
        rules: [
            /*{
                test: path.resolve(__dirname, './src/utils/constant.js'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'CONSTANT'
                    }
                ]
            },*/
            {
                test: /\.js$/,
                exclude: ENTRY + 'node_modules',
                use: [
                    {
                        loader: 'happypack/loader',
                        options: {
                            id: 'jsx'
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                exclude: ENTRY + 'node_modules',
                use: ExtractTextPlugin.extract({
                    fallback: [
                        {
                            loader: 'style-loader',
                            /*options: {
                                id: 'styleCss'
                            }*/
                        }
                    ],
                    use: [
                        {
                            loader: 'happypack/loader',
                            options: {
                                id: 'css'
                            }
                        }
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
            ],
            {
                copyUnmodified: true
            }
        ),
        new webpack.ProvidePlugin({
            CONSTANT: path.resolve(__dirname, './src/utils/constant.js')
        }),
        new HappyPack({
            id: 'jsx',
            threadPool: happyThreadPool,
            loaders: [
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }
            ]
        }),
        new HappyPack({
            id: 'css',
            threadPool: happyThreadPool,
            loaders: [
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

    ]

};