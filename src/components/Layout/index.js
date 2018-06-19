import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Dashboard from 'components/Dashboard';
import Projects from 'components/Projects';

export default () => (
  <div>
    <Header />
    <Route path="/" component={Dashboard} exact />
    <Route path="/projects" component={Projects} exact />
  </div>
);
