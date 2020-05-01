const server = require('./server.js');

class KoaMockPlugin {
    constructor({ config, port = 3000 }) {
        this.config = config;
        this.port = port;
    }
    apply() {
        server({ config: this.config, port: this.port });
    }
}

module.exports = KoaMockPlugin;