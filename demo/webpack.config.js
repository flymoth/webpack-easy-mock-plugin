const path = require('path');

const WebpackEasyMockPlugin = require('../src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./mock/config.js');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'flymoth-webpack.bundle.js'
    },
    plugins: [
        new WebpackEasyMockPlugin({
            config,
            port: 5000
        }),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': 'http://localhost:5000/api'
                }
            }
        },
        port: 8080
    }
};