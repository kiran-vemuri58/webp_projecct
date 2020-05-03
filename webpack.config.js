const path = require('path');

module.exports={
    entry:'./src/index-view.js',
    output:{
        filename: 'bundle.js',
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
                    'style-loader' , 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader' , 'css-loader' , 'sass-loader'
                ]
            }
            
        ]
    },
    mode:'none'
}