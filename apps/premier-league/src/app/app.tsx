import React from 'react';
import { Standings, Teams  } from '@football-nx/ui';

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
