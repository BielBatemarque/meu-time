import { useEffect, useState } from 'react';
import { Menu } from '../Menu/Menu';
import './ViewMoreLeague.css';
import { useParams } from 'react-router-dom';
import { options } from '../../data/data';

export const ViewMoreLeague = ({ match }) => {
    const { id } = useParams();
    const [inforLigas, setInfoLigas] = useState([]);

    let confirmId = id.substring(1);
    confirmId = Number(confirmId);

    const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${confirmId}`;

    const request = async () => {
        const request = await fetch(url, options);
        const json = await request.json();
        const { response } = json;
         setInfoLigas(response);
    }

    const { response } = inforLigas;

    useEffect(() => {
        request();
        console.log(response);
    }, []);

    console.log(inforLigas);

    return(
        <div className="ViewMoreLeague">
            <Menu />
        </div>
    );
}