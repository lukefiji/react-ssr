// ES2015 imports in Node thanks to Webpack
import 'babel-polyfill'; // Regenerator runtime definition
import express from 'express';
import { matchRoutes } from 'react-router-config';

import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Makes 'public' static; makes it accessible to the outside world
app.use(express.static('public'));

app.get('*', (req, res) => {
  // Creating store state before being rendered
  const store = createStore();

  // Look at current route and returns array of
  // components that are going to be rendered
  const promises = matchRoutes(Routes, req.path)
    // Map over each matching route's loadData method
    .map(({ route }) => {
      // Pass store into loadData
      return route.loadData ? route.loadData(store) : null;
    });

  // Wait for all loadData promises to resolve
  Promise.all(promises).then(() => {
    // Sends all loadData data to renderer
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
