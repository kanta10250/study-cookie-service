'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Set-Cookie', `last_access=${now}`);
  res.end('hi')
});

const port = 8009;
server.listen(port, () => {
  console.info(`port ${port} server boot`);
});
