const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry:'./src/index-view.js',
    output:{
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: 'dist/'
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
    mode:'none',
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename:'bundle.[contenthash].css'
        })
    ]
}