//webpack配置文件，该配置下，终端输入：webpack-dev-server 开启服务和热更新，
//可能，会有报错，最好将 webpack-dev-server 命令配置到package.json的scripts选项中

// 引入 nodejs 的 path 模块
const path = require('path');
// 引入 uglifyjs-webpack-plugin js压缩插件模块
const unlify = require('uglifyjs-webpack-plugin');
// 引入 html-webpack-plugin HTML打包插件模块
const htmlPlugin = require('html-webpack-plugin');
// 引入 extract-text-webpack-plugin 单独打包CSS插件
const extractTextPlugin = require('extract-text-webpack-plugin');

const website = {
    publicPath:'http://localhost:8888/'
}

module.exports = {
    // 入口文件的配置项
    entry:{
        // 这里的 entryFile 随意
        entryFile:'./src/entry.js',
        entryFile2:'./src/entry2.js'
    },

    // 出口文件的配置项
    output:{
        // 指定打包的路径
        path:path.resolve(__dirname,'dist'),
        // 指定文件名
        filename:'[name].js',
        publicPath:website.publicPath
    },

    // 模块：列入解析CSS，图片路径转换等
    module:{
        rules:[
            {
                test : /\.css$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test : /\.(png|jpg|gif)/,
                use : [
                    {
                        // url-loader 封装了 file-loader，所以 file-loader 在这里可以不用配置
                        loader:'url-loader',
                        options:{
                            limit:500000
                        }
                    }
                ]
            }
        ]
    },

    // 插件：特定的功能插件
    plugins:[
        // js压缩插件，生产环境下作用，webpack-dev-server 会冲突
        new unlify(),
        // HTML发布插件
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        // 单独打包CSS文件
        new extractTextPlugin('/css/index.css')
    ],

    // 配置webpack开发服务以及热更新
    devServer:{
        // 设置生产环境的基本目录结构
        contentBase : path.resolve(__dirname,'dist'),
        // 设置服务器的IP地址
        host : 'localhost',
        // 设置服务器的端口
        port : '8888',
        // 设置服务端压缩是否开启
        compress : true
    }
}