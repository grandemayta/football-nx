import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Standings, Teams  } from '@football-nx/ui';
import './app.scss';

export const App = () => {
  return (
    <Router>
      <>
        <h1>Serie A</h1>
        <ul>
          <li>
            <Link to="/standings">Standings</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </>
      <Route path="/standings" render={() => <Standings competition="SA" season="2018" />} />
      <Route path="/teams" render={() => <Teams competition="SA" />} />
    </Router>
  );
};

export default App;
