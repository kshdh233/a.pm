const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/http://localhost:8081/',
    createProxyMiddleware({
      target: 'http://localhost:8081/',
      changeOrigin: true,
    })
  );
};