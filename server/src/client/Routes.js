import React from 'react';

import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

/**
 * Set up one source of truth for routes, to be used inside
 * BrowserRouter on the client, and StaticRouter on the server
 * - Defined in an array for react-router-config
 */
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  }
];

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };
