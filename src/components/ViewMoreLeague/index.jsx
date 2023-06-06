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
        const { response } = await json;
        console.log(response);
        setInfoLigas(await response); 
    }


    useEffect(() => {
       request();
    }, []);

    return(
        <div className="ViewMoreLeague">
            <Menu />
            {inforLigas.length === 0 ? <h1>carregando</h1> : 
                inforLigas.map(r => (
                    <div key={r.league.id} className='info'>
                        <h3>{r.league.name}</h3>
                        <img src={r.league.logo} alt="logo da liga" />
                        <h4>Tipo: {r.league.type}</h4>
                        <h3>Temporadas</h3>
                        <div className="temporadas">
                                {inforLigas[0].seasons.map(s => (
                                <div key={s.year} className='divpaiLista'>
                                    <div className='itemLista'>
                                        <h3>Ano: {s.year}</h3>
                                        <p>Começo: {s.start}</p>
                                        <p>Fim: {s.end}</p>
                                    </div>
                                </div>
                                ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}