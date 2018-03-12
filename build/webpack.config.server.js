const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig,{
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        // path: path.join(__dirname, '../dist'),
        // publicPath: '/public/', ///public/绝对路径，''相对路径
        libraryTarget: 'commonjs2'//打包模块使用的规范
    }
})
