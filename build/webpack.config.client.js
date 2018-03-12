const path = require('path')
// const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')
const webpack=require('webpack')
const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig,{
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js',
        // path: path.join(__dirname, '../dist'),
        // publicPath: '/public/', ///public/绝对路径，''相对路径
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
})

// localhost:8888/filename
if (isDev) {
    config.entry={
        app:[
            'react-hot-loader/patch',
            path.join(__dirname, '../client/app.js')
        ]
    }
    config.devServer = {
        host: '0.0.0.0',
        compress: true,
        port: '8888',
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        overlay: {
            errors: false
        },
        publicPath: '/public/',
        historyApiFallback: {
            index: '/public/index.html'
        }
    },
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
