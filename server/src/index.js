// ES2015 imports in Node thanks to Webpack
import 'babel-polyfill'; // Regenerator runtime definition
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Makes 'public' static; makes it accessible to the outside world
app.use(express.static('public'));

app.get('*', (req, res) => {
  // Creating store state before being rendered
  const store = createStore();

  // Intitialize and load data into store

  // Send current route and store to renderer to determine
  // state and which it should render on the server
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
