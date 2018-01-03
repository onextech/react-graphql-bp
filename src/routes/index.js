import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'kit/lib/routing';
import Home from 'components/pages/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect from="/old/path" to="/new/path" />
  </Switch>
);

export default Routes;
