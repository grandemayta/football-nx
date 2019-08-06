import { BASEURL, HEADERS } from '@seriea-nx-example/data';

const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};

export const getStandings = async (season, setState) => {
    const response = await httpWrapper(`competitions/SA/standings?season=${season}`);
    const data = await response.json();
    setState(data.standings[0].table);
};

export const getTeams = async (setState) => {
    const response = await httpWrapper('competitions/SA/teams');
    const data = await response.json();
    setState(data.teams);
};