'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  const expiresDate = new Date(now + 100 * 60 * 60 * 24 * 30);
  res.setHeader('Content-Type', 'text/plain;charset=utf8');
  res.setHeader('Set-Cookie', `last_access=${now}expires=${expiresDate}`);
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.end(new Date(last_access_time).toLocaleString('ja-JP', {timeZone: 'Asia/Tokyo'}));
});

const port = 8009;
server.listen(port, () => {
  console.info(`port ${port} server boot`);
});
