const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            './src/client/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/client'),
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
};