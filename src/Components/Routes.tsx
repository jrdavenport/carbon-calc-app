import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAppContext } from '../libs/AppContext';
import Admin from '../pages/admin';
import Graph from '../pages/graph';
import Home from '../pages/home';
import Login from '../pages/login';
import School from '../pages/school';
import AppBanner from './AppBanner';

function Routes() {

  const { isAuthenticated } = useAppContext()!;

  let routes;
  if (isAuthenticated) {
    routes = <SignedInRoutes />;
  } else {
    routes = <SignedOutRoutes />;
  }

  return (
    <Router>
      <Typography>{isAuthenticated}</Typography>
      <AppBanner />
      {routes}
    </Router >
  );
};

const SignedInRoutes = () => (
  <Switch>
    <Route path="/graph">
      <Graph />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="/school-selector">
      <School />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="*" >
      <NotFound />
    </Route>
  </Switch>
);

const SignedOutRoutes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="*" >
      <NotFound />
    </Route>
  </Switch>
);

const NotFound = () => {
  return (
    <Container>
      <Typography>Page Not Found</Typography>
      <p>The URL doesn&apos;t seem to exist</p>
    </Container>
  );
};

export default Routes;
