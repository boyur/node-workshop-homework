const parserQuery = require('./parserQuery');

const sum = (res, query) => {
  const parsedQuery = parserQuery(res, query);
  if (parsedQuery) {
    const { a, b } = parsedQuery;
    const result = a + b;

    const json = JSON.stringify({ sum: result });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);
  }
};

const difference = (res, query) => {
  const parsedQuery = parserQuery(res, query);
  if (parsedQuery) {
    const { a, b } = parsedQuery;
    const result = a - b;

    const json = JSON.stringify({ difference: result });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);
  }
};

const multiply = (res, query) => {
  const parsedQuery = parserQuery(res, query);
  if (parsedQuery) {
    const { a, b } = parsedQuery;
    const result = a * b;

    const json = JSON.stringify({ multiply: result });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);
  }
};

const divide = (res, query) => {
  const parsedQuery = parserQuery(res, query);
  if (parsedQuery) {
    const { a, b } = parsedQuery;
    const result = a / b;

    const json = JSON.stringify({ divide: result });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(json);
  }
};

const home = (res) => {
  console.log("Request handler 'home'");

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('home');
  res.end();
};


exports.home = home;
exports.sum = sum;
exports.difference = difference;
exports.multiply = multiply;
exports.divide = divide;
