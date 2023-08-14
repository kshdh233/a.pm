const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    [
      '/actor/*', 
      '/pmshow/*', 
      '/seat/*', 
      '/theater/*', 
      '/user/*', 
      '/view/*'
    ],
    createProxyMiddleware({
      target: 'https://apm-backend-a20e349efc23.herokuapp.com',
      changeOrigin: true,
    })
    
  );
};
