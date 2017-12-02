const url = require('url');
const router = require('./router');

const requestListener = (req, res) => {
  const { pathname } = url.parse(req.url, true);
  router(pathname, req, res);
};

module.exports = requestListener;
