const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://naveropenapi.apigw.ntruss.com',
    // '/http://localhost:8080/'
    createProxyMiddleware({
      target: 'https://naveropenapi.apigw.ntruss.com',
      // target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
};