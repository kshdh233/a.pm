const express = require('express');
const path = require('path');

const app = express();

const { createProxyMiddleware } = require('http-proxy-middleware');

// 정적 파일 서버로 빌드된 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

app.use(
  '/map-geocode/v2/geocode',

  createProxyMiddleware({
    target: 'https://naveropenapi.apigw.ntruss.com',
  
    changeOrigin: true,
  })
);
// 모든 경로에서 index.html 제공 (SPA 지원)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 실행
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
}); 