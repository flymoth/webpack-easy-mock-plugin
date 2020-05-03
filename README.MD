# WebpackEasyMockPlugin
[中文](./README_ZH.MD)

A webpack plugin that uses koa and koa-router to build mock servers.

# Scenes to be used

When we are usually developing a project, because it is a front-end and back-end separation mode, when the interface is not written, we often need to mock the data ourselves. The role of this plugin is to serve as a node, and point your interface to the mock file you create, and return the data.


# Use

## Install

```
// use npm 
npm install webpack webpack-easy-mock-plugin --save-dev
// use yarn
yarn add webpack webpack-easy-mock-plugin --dev
```


## Configuration

### 1. webpack configuration

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

### 2. mock configuration

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

### 3.Explanation

`options.port` mock server The listening port needs to be different from the project port.

`options.config` Mock data configuration. The key is the path, which is the route corresponding to koa. The value is mock data. You can use `data` to return the data, or you can specify the location of the mock file via` path`. The mock file is a json file.
## Demo

### 1.General usage
 [Demo](https://github.com/flymoth/webpack-easy-mock-plugin-demo/tree/master/demo)。

### 2.Use in Vue(vue-cli 3)
 [Vue-demo](https://github.com/flymoth/webpack-easy-mock-plugin-demo/tree/master/vue-demo)。

### 3.Use in React(create-react-app)
 [React-demo](https://github.com/flymoth/webpack-easy-mock-plugin-demo/tree/master/react-demo)。(If an error of missing dependencies is reported after installation, install the missing dependencies.)
