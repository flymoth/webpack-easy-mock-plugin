# WebpackEasyMockPlugin


一个使用koa和koa-router建立mock server的webpack插件。

# 使用场景

我们平时在开发项目时，因为是前后端分离的模式，当接口没写完时，我们常常需要自己去mock数据。这个插件的作用就是起一个node服务，并把你的接口指向你创建的mock文件，并返回其中的数据。


# 使用

## 安装

```
// use npm 
npm install webpack webpack-easy-mock-plugin --save-dev
// use yarn
yarn add webpack webpack-easy-mock-plugin --dev
```


## 配置

### 1. webpack 配置

```javascript
{
    plugins: [
        new WebpackEayMockPlugin({
            config: mockConfig,
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
```

### 2. mock配置

```javascript
const path = require('path');

const config = {
    '/api/demo01': {
        data: {
            demo01: 1
        }
    },
    '/api/demo02': {
        path: path.join(__dirname, './data/demo02.json')
    },
};

module.exports = config;
```

### 3.说明

`options.port` mock server 监听的端口，需不同于项目端口。

`options.config` mock 数据的配置。key 是路径，就是对应 koa 的路由。值是 mock 数据，可以用 `data` 返回数据，也可以通过 `path` 指定 mock 文件位置。mock 文件为 json 文件。

## Demo

### 1.常规用法
参考 [Demo](https://github.com/flymoth/webpack-easy-mock-plugin-demo/tree/master/demo)。

### 2.在Vue(vue-cli 3)中使用
参考 [Vue-demo](https://github.com/flymoth/webpack-easy-mock-plugin-demo/tree/master/vue-demo)。

### 3.在React(create-react-app)中使用
参考 [React-demo](https://github.com/flymoth/webpack-easy-mock-plugin-demo/tree/master/react-demo)。(若安装之后报缺少依赖的错误，将缺失的依赖安装上即可。)
