import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@football-nx/home';
import { Standings } from '@football-nx/standings';
import { Teams } from '@football-nx/teams';
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
