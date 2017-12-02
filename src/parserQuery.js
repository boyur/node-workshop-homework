const parserQuery = (res, query) => {
  if (query.a === undefined || query.b === undefined) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
    return null;
  }

  const a = parseInt(query.a, 10);
  const b = parseInt(query.b, 10);
  return { a, b };
};

module.exports = parserQuery;
