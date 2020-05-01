const WebpackEasyMockPlugin = require('webpack-easy-mock-plugin');
const config = require('./mock/config')
module.exports = {
    configureWebpack: {
        plugins: [
            new WebpackEasyMockPlugin({
                config,
                port: 5000
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
    }
}