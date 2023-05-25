import { useCallback, useEffect, useState } from 'react';
import { Menu } from '../Menu/Menu';
import './Ligas.css';
import { options } from '../../data/data';
import { Loader } from '../Loader';
import { Input } from '../Input';
import { Button } from '../button';

export const Ligas = () => {
    const[ligas, setLigas] = useState([]);
    const[allLeagues, setAllLeagues] = useState([]);
    const[pages, setPages] = useState(0);
    const[leaguesPerpage] = useState(15);
    const[searchValue, setSearchValue] = useState('');

    const handleLoadLeagues = useCallback(async (page, ligasPorPagina) => {
        const carregaLigas = await handleFetch();
        
        setLigas(carregaLigas.slice(page, ligasPorPagina));
        setAllLeagues(carregaLigas);
    }, []);

    useEffect(() => {
        handleLoadLeagues(0, leaguesPerpage);
    }, [handleLoadLeagues, leaguesPerpage]);
    
    const handleFetch = async () => {
        const api = 'https://api-football-v1.p.rapidapi.com/v3/leagues';
        const request = await fetch(api, options);
        const json = await request.json();
        const { response } = json;
        console.log(response);
        return response;
    };


    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    console.log(ligas, searchValue);
    return(
        <div className="Ligas">
            <Menu />
            <h1 className='mainTitle'>Ligas</h1>
            <Input text={'Pesquisar Liga'} search={handleChange}/>
            <div className='listaLigas'>
                {!ligas ? 
                    <Loader text={'carregando'} />
                : ligas.map(liga => (
                    <div key={liga.league.id} className='card'>
                        <h3>{liga.league.name}</h3>
                        <span className="text">{liga.country.name}</span>
                        <img src={liga.league.logo} alt="logo ligas" className='logos'/>
                    </div>
                ))}
            </div>

            <div className="button-container">
                <Button text={'carregar mais ligas'} />
            </div>
        </div>
    );
}