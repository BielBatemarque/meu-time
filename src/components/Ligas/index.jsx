import { useCallback, useEffect, useState, useMemo } from 'react';
import { Menu } from '../Menu/Menu';
import './Ligas.css';
import { options } from '../../data/data';
import { Loader } from '../Loader';
import { Input } from '../Input';
import { Button } from '../button';
import { Card } from '../Card/index';

export let idLiga = 39;

export const Ligas = () => {
    const[ligas, setLigas] = useState([]);
    const[allLeagues, setAllLeagues] = useState([]);
    const[page, setPage] = useState(0);
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

    const loadMoreLeagues = () => {
        const nextPage = page + leaguesPerpage;
        const nextLeagues = allLeagues.slice(nextPage, nextPage + leaguesPerpage);
        ligas.push(...nextLeagues);

        setLigas(ligas);
        setPage(nextPage);
    }

    const noMoreLeague = page + leaguesPerpage >= allLeagues.length;

    const filteredLeagues = useMemo(() => {
        if (!!searchValue) {
          return allLeagues.filter(league =>
            league.league.name.toLowerCase().includes(searchValue.toLowerCase()));
        } else {
          return ligas;
        }
      }, [searchValue, allLeagues, ligas]);


    const handleChange = (e) => {
        const { value }  = e.target;
        setSearchValue(value);
    }

    console.log(ligas, searchValue);
    return(
        <div className="Ligas">
            <Menu />
            <h1 className='mainTitle'>Ligas</h1>
            <Input text={'Pesquisar Liga'} search={handleChange}/>
            <div className='listaLigas'>
                {
                    filteredLeagues > 0 ?
                    !ligas ? 
                        <Loader text={'carregando'} />
                        : ligas.map(liga => (
                            <Card description={liga.country.name} logo={liga.league.logo} title={liga.league.name} key={liga.league.id} id={liga.league.id}/>
                ))
                : 
                filteredLeagues.map(liga => (
                    <Card description={liga.country.name} logo={liga.league.logo} title={liga.league.name} key={liga.league.id}/>
        ))
            }
            </div>

            <div className="button-container">
                <Button text={'carregar mais ligas'} action={loadMoreLeagues} disabled={noMoreLeague}/>
            </div>
        </div>
    );
}