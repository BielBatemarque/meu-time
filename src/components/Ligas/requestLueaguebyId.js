import { options } from '../../data/data';
import { idLiga } from './index';

const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${idLiga}`;

export const infoLigas = async () => {
    const request = await fetch(url, options);
    const json = await request.json();

    return json;
};