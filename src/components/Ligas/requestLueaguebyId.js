import { options } from '../../data/data';
import { Ligas} from './index';

const { selectedId } = Ligas();
const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${selectedId}`;

export const infoLigas = async () => {
    const request = await fetch(url, options);
    const json = await request.json();

    return json;
};