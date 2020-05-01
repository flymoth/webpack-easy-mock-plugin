const Koa = require('koa');
const mockRouter = require('./router');
module.exports = function ({ config, port = 3000 }) {
    if (config) {
        const app = new Koa();
        app.use(mockRouter(config).routes());
        app.listen(port, 'localhost')
        console.log(`😎Mock server listening on http://localhost:${port}`)
    }
    else {
        console.warn('😅Please config first');
    }
};