const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    // '/https://apm-backend-a20e349efc23.herokuapp.com/',
    '/http://localhost:8080/',
    createProxyMiddleware({
      // target: 'https://apm-backend-a20e349efc23.herokuapp.com/',
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
};