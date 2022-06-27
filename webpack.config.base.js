const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/index.js', //入口
    output: {
        filename: 'index.[contenthash].js' //文件处理后的名字
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '白境第一课', //<%= htmlWebpackPlugin.options.title %>
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                loader: ['file-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ]
            }
        ]
    }
}