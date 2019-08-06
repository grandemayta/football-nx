import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@seriea-nx-example/home';
import { Standings } from '@seriea-nx-example/standings';
import { Teams } from '@seriea-nx-example/teams';
import './app.scss';

export const App = () => {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/standings" render={() => <Standings competition="SA" season="2018" />} />
        <Route path="/teams" render={() => <Teams competition="SA" />} />
    </Router>
  );
};

export default App;
