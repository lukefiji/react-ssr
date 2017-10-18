// ES2015 imports in Node thanks to Webpack
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// Makes 'public' static; makes it accessible to the outside world
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Render React component to a HTML string, JSX is compiled by Webpack
  const content = renderToString(<Home />);

  const html = `
   <html>
    <head></head>
    <body>
      <div>${content}</div>
      <script src="bundle.js"></script>
    </body>
   </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
