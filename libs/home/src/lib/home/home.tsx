import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export const Home = () => {
  return (
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
  );
}

export default Home;
