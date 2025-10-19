const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        clean: true,
    },
    module: {
        rules: [{
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new(require('html-webpack-plugin'))({
            template: './index.html', // ✅ Исправлено (см. пункт ниже)
        }),
    ],
    mode: 'development',
};