import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

// Set up one source of truth for routes, to be used inside
// BrowserRouter on the client, and StaticRouter on the server
export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};
