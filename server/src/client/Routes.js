import React from 'react';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

/**
 * Set up one source of truth for routes, to be used inside
 * BrowserRouter on the client, and StaticRouter on the server
 * - Defined in an array for react-router-config
 */
export default [
  {
    // {loadData, component: HomePage}
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users'
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
