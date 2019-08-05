import React from 'react';
import './app.scss';

import { Route } from 'react-router-dom';
import { Home } from '@seriea-nx-example/home';
import { Standings } from '@seriea-nx-example/standings';
import { Teams } from '@seriea-nx-example/teams';



export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <>
      <Route path="/" exact render={Home} />
      <Route path="/standings" render={Standings} />
      <Route path="/teams" render={Teams} />
    </>
  );
};

export default App;
