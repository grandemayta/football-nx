import React, { useState, useEffect } from 'react';
import { getStandings } from '@football-nx/services';
import './standings.scss';

export interface StandingsProps {
  competition: string,
  season: string
}

export const Standings = (props: StandingsProps) => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    getStandings(props.competition, props.season, setStandings);
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
