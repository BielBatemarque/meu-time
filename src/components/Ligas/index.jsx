import { useEffect, useState } from 'react';
import { Menu } from '../Menu/Menu';
import './Ligas.css';
import { options } from '../../data/data';

export const Ligas = () => {
    const[ligas, setLigas] = useState([]);

    useEffect(() =>{
        fetchApi();
    }, []);

    const fetchApi = async () => {

        const api = await fetch('https://api-football-v1.p.rapidapi.com/v3/leagues?country=England', options);
        const json = await api.json();
        setLigas(json);
        console.log(ligas);
    } 

    return(
        <div className="Ligas">
            <Menu />
            <div className='Ligas'>
                <p>{}</p>
            </div>
        </div>
    );
}