const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//to generate dynamic html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// it will clean the files from dist folder 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={
    entry:{
        'index-view':'./src/index-view.js',
        'index-view1': './src/index-view1.js'
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/static/'
    },
    module:{
        rules: [
            {
                test: /\/js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }]
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
    mode:'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns : [
                '**/*',
                path.join(process.cwd(),'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            title:'hello world',
            filename:"index.html",
            chunks: ['index-view','vendors~index-view~index-view1']
        }),
        new HtmlWebpackPlugin({
            title:'hello world 2',
            filename:"index2.html",
            chunks: ['index-view1','vendors~index-view~index-view1']
        })
    ],
    optimization:{
        splitChunks:{
            chunks: "all",
            minSize: 10000,
            automaticNameDelimiter:'_'
        }
    }
}