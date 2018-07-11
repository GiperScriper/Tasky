import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from 'components/Dashboard';
import Projects from 'components/Projects';
import ProjectDetail from 'components/Projects/ProjectDetail';

const appRouter = () => {
  console.log('render appRouter');
  return (
    <Fragment>
      <Route path="/" component={Dashboard} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/projects/:id" component={ProjectDetail} />
    </Fragment>
  );
};

export default appRouter;
