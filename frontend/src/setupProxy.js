const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/apis', createProxyMiddleware({ target: 'https://datacliq.co.uk', changeOrigin: true }));
};
