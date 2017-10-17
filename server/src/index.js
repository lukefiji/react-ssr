const express = require('express');
const React = require('react');

// Making ES6 modules loadable via CommonJS
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
