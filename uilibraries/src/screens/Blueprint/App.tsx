import './App.scss';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';

import Routes from './Routes';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        {Routes.map((route, index) => (
          <Route
            key={`Route-${route.text}-${index}`}
            exact={!route.hasSubRoutes}
            path={route.to}
            component={route.page}
          />
        ))}
        <Route path="*">
          <h3>This is catch all route</h3>
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
