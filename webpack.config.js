var path = require('path')

module.exports = {
    mode: 'production', //production 压缩模式 development 开发者模式
    entry: './src/index.js', //入口
    output: {
        filename: '[name].[contenthash].js' //文件处理后的名字
    }
}