const url = require('url');
const handle = require('./requestHandler');

const router = (pathname, req, res) => {
  const route = pathname.split('/')[1];

  if (!route) {
    handle.home(res);
    return;
  }

  if (typeof handle[route] === 'function') {
    if (req.method === 'GET') {
      const { query } = url.parse(req.url, true);
      handle[route](res, query);
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', (data) => {
        body += data;
      });

      req.on('end', () => {
        body = JSON.parse(body);
        handle[route](res, body);
      });
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
    });
    res.write('404');
    res.end();
  }
};

module.exports = router;
