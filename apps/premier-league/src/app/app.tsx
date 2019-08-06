import React from 'react';
import { Standings } from '@football-nx/standings';
import { Teams } from '@football-nx/teams';

import './app.scss';

export const App = () => {
  return (
    <>
      <Standings competition="PL" season="2018"></Standings>
      <Teams competition="PL"></Teams>
    </>
  );
};

export default App;
