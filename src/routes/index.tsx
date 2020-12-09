import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'Layout';
import Dashboard from 'pages/Dashboard';
import Favorites from 'pages/Favorites';

const Routes: React.FC = () => (
  <Switch>
    <Layout>
      <Route path="/" exact component={Dashboard} />
      <Route path="/favorites" component={Favorites} />
    </Layout>
  </Switch>
);

export default Routes;
