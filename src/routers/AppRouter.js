import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '@/components/Dashboard';
import Projects from '@/components/Projects';
import ProjectDetail from '@/components/Projects/ProjectDetail';

const AppRouter = () => {
  console.log('render appRouter');
  return (
    <div className="wrapper">
      <Route path="/" component={Dashboard} exact />
      <Route path="/projects" component={Projects} exact />
      <Route path="/projects/:id" component={ProjectDetail} />
    </div>
  );
};

export default AppRouter;
