const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
const cleanWebpackPlugin = require("clean-webpack-plugin");
let packageName = "wisedu-vue";

module.exports = {
    entry: ["./entry.js"],
    output: {
        path:path.resolve(__dirname, 'dist'),
        // 打包多出口文件
        // 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
        filename: `./${packageName}.min.js`,
        sourceMapFilename: `${packageName}.js.map`
    },
    module:{
        rules:[
            { 
                test: /\.vue$/, 
                loader: 'vue-loader',
                options: { 
                    loaders: [ 
                        MiniCssExtractPlugin.loader, 
                        "css-loader"
                    ]
                }
            },
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [{ loader: 'url-loader',options: { limit: 8192 } }] 
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
            },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: 'babel-loader'
            // }
        ]
    },
    plugins:[
        new cleanWebpackPlugin(["dist"]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: `${packageName}.min.css`,
            // chunkFilename: 'app.[contenthash:12].css'  // use contenthash *
            chunkFilename: `${packageName}.min.css`
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {  //导入的时候不用写拓展名
        extensions: [' ', '.js', '.json', '.vue', '.scss', '.css'],
        alias: {
            vue: 'vue/dist/vue.js',
            vuex: 'vuex/dist/vuex.js',
            "vue-router": 'vue-router/dist/vue-router.js',
        }
    },
    // externals: ["vue"],
    devtool: 'source-map'
}