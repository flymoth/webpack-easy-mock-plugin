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