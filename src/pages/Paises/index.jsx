import { useCallback, useEffect, useMemo, useState } from 'react';
import './Paises.css'
import { options } from '../../data/data';
import { Card } from '../../components/Card/index';
import { Loader } from '../../components/Loader/index';
import { Input } from '../../components/Input/index';
import { Button } from '../../components/button/index';

export const Paises = () => {
    const [paises, setPaises] = useState([]);
    const [search, setSearch] = useState('');
    const [Allcountries, setAllContries] = useState([]);
    const [paisesPorPagina] = useState(15);
    const [page, setPage] = useState(0);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleLoadPaises = useCallback(async (pagina, paisesPorPagina) => {
        const carregaPaises = await handleFetch();

        setPaises(carregaPaises.slice(pagina, paisesPorPagina));
        setAllContries(carregaPaises);
    }, []);

    useEffect(() => {
        handleLoadPaises(0, paisesPorPagina);
    }, [handleLoadPaises, paisesPorPagina]);
    
    const handleFetch = async () => {
        const url = 'https://api-football-v1.p.rapidapi.com/v3/countries';
        const request = await fetch(url, options);
        const response = await request.json();
        
        return response.response;
    }

    const handleChange = (e) => {
        const {value} = e.target
        setSearch(value);
    }

    const loadMoreContries = () => {
        const nextPage = page + paisesPorPagina;
        const nextPaises = Allcountries.slice(nextPage, nextPage + paisesPorPagina);

        paises.push(...nextPaises);
        setPage(nextPage);
    }

    const filteredCountries = useMemo(() => {
        if(!!search){
            return Allcountries.filter(pais => pais.name.toLowerCase().includes(search.toLowerCase()));
        }else{
            return paises;
        }
    }, [search, Allcountries, paises]);



    console.log(search);
    console.log(paises);

    return(
        <div className="countries">
            <h1 className='title-pais'>Países</h1>
            <Input  text={'Pesquise Por nome do País'} search={handleChange}/>

            <div className="lista-paises">
           {
            filteredCountries > 0 ? 
            !paises ?
                <Loader text={'carregando'} />
            :
            paises.map((pais, index) => (
                <Card 
                title={pais.name}
                logo={pais.flag}
                description={pais.code}
                key={index}
                />
            )) :
            filteredCountries.map((pais, index) => (
                <Card 
                title={pais.name}
                logo={pais.flag}
                description={pais.code}
                key={index}
                />
            ))
           }
            </div>

            <div className="button-container">
                <Button text={'carregar mais Países'} action={loadMoreContries}/>
            </div>
        </div>
    );
}