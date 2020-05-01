const Router = require('koa-router')
module.exports = function mockRouter(config) {
    const router = new Router();
    Reflect.ownKeys(config).map(route => {
        router.all(route, (ctx) => {
            let mockData = {};
            if (config[route].data) {
                mockData = config[route].data;
            }
            else if (config[route].path) {
                delete require.cache[config[route].path];
                mockData = require(config[route].path);
            }
            ctx.body = {
                error: 0,
                data: mockData
            }
        });
    })
    return router;
}