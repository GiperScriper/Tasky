import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from 'components/Dashboard';
import Projects from 'components/Projects';

const appRouter = () => (
  <Fragment>
    <Route path="/" component={Dashboard} />
    <Route path="/projects" component={Projects} exact />
  </Fragment>
);

export default appRouter;
