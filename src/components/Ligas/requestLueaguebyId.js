import { useContext } from 'react';
import { options } from '../../data/data';
import { CardContext } from '../Card/index';

const { id } = useContext(CardContext);
const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${id}`;

export const infoLigas = async () => {
    const request = await fetch(url, options);
    const json = await request.json();

    return json;
};