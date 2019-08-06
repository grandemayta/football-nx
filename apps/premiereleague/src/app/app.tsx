import React from 'react';
import { Standings } from '@seriea-nx-example/standings';
import { Teams } from '@seriea-nx-example/teams';

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
