// ES2015 imports in Node thanks to Webpack
import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Makes 'public' static; makes it accessible to the outside world
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
