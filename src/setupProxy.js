const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/map-geocode/v2/geocode',
    // '/http://localhost:8080/'
    createProxyMiddleware({
      target: 'https://naveropenapi.apigw.ntruss.com',
      // target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
};