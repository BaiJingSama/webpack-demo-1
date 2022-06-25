const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development', //production 压缩模式 development 开发者模式
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js', //入口
    output: {
        filename: 'index.[contenthash].js' //文件处理后的名字
    },
    plugins: [new HtmlWebpackPlugin({
        title: '白境第一课', //<%= htmlWebpackPlugin.options.title %>
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, ],
    },
}