import { useEffect, useState } from 'react';
import { Menu } from '../Menu/Menu';
import './Ligas.css';
import { options } from '../../data/data';

export const Ligas = () => {
    const[ligas, setLigas] = useState({});

    useEffect(() =>{
        fetchApi();
    }, []);
    
    const fetchApi = async () => {
        const api = 'https://api-football-v1.p.rapidapi.com/v3/leagues';

        const request = await fetch(api, options);
        const json = await request.json();
        setLigas(json);
    } 

    const { response } = ligas;
    console.log(response);
    
    return(
        <div className="Ligas">
            <Menu />
            <h1 className='mainTitle'>Ligas</h1>
            <div className='listaLigas'>
                {!response ? <div>Carregando</div> : response.map(liga => (
                    <div key={liga.league.id} className='card'>
                        <h3>{liga.league.name}</h3>
                        <span className="text">{liga.country.name}</span>
                        <img src={liga.league.logo} alt="logo ligas" className='logos'/>
                    </div>
                ))}
            </div>
        </div>
    );
}