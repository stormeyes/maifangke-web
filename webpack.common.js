const path = require('path');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const QcCOSPlugin = require('webpack-cos-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: __dirname + '/dist',
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: "file-loader",
                options: {
                    name: 'dist/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "深房客 - 深圳买房助手 买个好房子",
            template: 'default_index.ejs',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            MODE: JSON.stringify("dev")
        }),
    ]
};