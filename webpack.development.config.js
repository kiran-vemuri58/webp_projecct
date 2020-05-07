const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//to generate dynamic html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// it will clean the files from dist folder 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={
    entry:'./src/index-view.js',
    output:{
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: ''
    },
    module:{
        rules: [
            {
                test: /\/js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            { 
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader , 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader , 'css-loader' , 'sass-loader'
                ]
            }
            
        ]
    },
    mode:'development',
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename:'bundle.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns : [
                '**/*',
                path.join(process.cwd(),'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            title:'hello world',
            filename:"kiran.html"
        })
    ]
}