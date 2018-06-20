import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from 'components/Dashboard';
import Projects from 'components/Projects';

const appRouter = () => (
  <Fragment>
    <Route path="/" component={Dashboard} exact />
    <Route path="/projects" component={Projects} />
  </Fragment>
);

export default appRouter;
