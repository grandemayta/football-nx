import React, { useState, useEffect } from 'react';
import { getTeams } from '@seriea-nx-example/services';
import './teams.scss';

export interface TeamProps {
  competition: string
}

export const Teams = (props: TeamProps) => {
  const [teams, setTeams] = useState([]); 

  useEffect(() => {
    getTeams(props.competition, setTeams);
  });

  return (
    <>
      <h1>Teams</h1>
      <ul>
        {teams.map(team => {
          return (
            <li key={team.id}>
              <a>{team.name}</a>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default Teams;
