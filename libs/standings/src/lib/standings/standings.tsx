import React from 'react';
import './standings.scss';

export const Standings = () => {
  return (
    <>
      <h1>Standings</h1>
      <table>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Inter</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Napoli</td>
          <td>99</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Juventus</td>
          <td>0</td>
        </tr>
      </table>
    </>
  );
};

export default Standings;
