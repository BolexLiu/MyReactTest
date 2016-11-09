module.exports={

    // devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:__dirname+"/app/app.js",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'//添加对样式表的处理
            },
            {test: /\.(jpg|png|svg)$/, loader: "url?limit=8192"},
        ]
    },
    devServer:{
        contentBase: "./public",
        color:true,
        historyApiFallback :true,
        inline :true,
    }
}