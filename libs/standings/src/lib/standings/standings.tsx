import React, { useState, useEffect } from 'react';
import { getStandings } from '@seriea-nx-example/services';
import './standings.scss';


export const Standings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    getStandings(2018, setStandings);
  }, []);

  return (
    <>
      <h1>Standings</h1>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
            {standings.map(standing => {
              return (
                <tr key={standing.team.id}>
                  <td>{standing.position}</td>
                  <td>{standing.team.name}</td>
                  <td>{standing.points}</td>
                </tr>
              )})}
        </tbody>
      </table>
    </>
  );
};

export default Standings;
