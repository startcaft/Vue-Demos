//webpack配置文件，该配置下，终端输入：webpack-dev-server 开启服务和热更新，
//可能，会有报错，最好将 webpack-dev-server 命令配置到package.json的scripts选项中

// 引入 nodejs 的 path 模块
const path = require('path');

module.exports = {
    // 入口文件的配置项
    entry:{
        // 这里的 entryFile 随意
        entryFile:'./src/entry.js',
    },

    // 出口文件的配置项
    output:{
        // 指定打包的路径
        path:path.resolve(__dirname,'dist'),
        // 指定文件名
        filename:'bundle.js'
    },

    // 模块：列入解析CSS，图片路径转换等
    module:{},

    // 插件：特定的功能插件
    plugins:[],

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