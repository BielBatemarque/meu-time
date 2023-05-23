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
            {/* {ligas === false ? <p>carregando ligas</p> :
                response.map(liga => (
                    <div>{liga.league.name}</div>
            ))} */}
        </div>
    );
}