import { BASEURL, HEADERS } from '@football-nx/data';

const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};

export const getStandings = async (competition, season, setState) => {
    const response = await httpWrapper(`competitions/${competition}/standings?season=${season}`);
    const data = await response.json();
    setState(data.standings[0].table);
};

export const getTeams = async (competition, setState) => {
    const response = await httpWrapper(`competitions/${competition}/teams`);
    const data = await response.json();
    setState(data.teams);
};