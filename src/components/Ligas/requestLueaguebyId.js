import { options } from '../../data/data';
import { Card } from '../Card/index';

const { id } = Card();
const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${id}`;

export const infoLigas = async () => {
    const request = await fetch(url, options);
    const json = await request.json();

    return json;
};