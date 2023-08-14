const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://apm-backend-a20e349efc23.herokuapp.com',
      changeOrigin: true,
    })
    
  );
};
