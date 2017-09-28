const webpack = require('webpack');
const path = require('path');

const ENTRY = path.resolve(__dirname);
const OUTPUT = path.resolve(__dirname, './output');


const vendors = [
    'react',
    'react-dom',
    'react-router',
    'jquery',
    'expose-loader',
    'babel-polyfill',
];

module.exports = {
    entry: {
        "dllLib": vendors,
    },
    output: {
        path: ENTRY,
        filename: '[name].dll.js',
        library: '[name]_library',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, 'manifest.json'),
            name: '[name]_library',
            context: __dirname,
        }),
    ],
};