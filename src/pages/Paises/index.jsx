import { useEffect, useState } from 'react';
import './Paises.css'
import { options } from '../../data/data';
import { Card } from '../../components/Card/index';
import { Loader } from '../../components/Loader/index';

export const Paises = () => {
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        handleFetch();
    }, []);
    
    const handleFetch = async () => {
        const url = 'https://api-football-v1.p.rapidapi.com/v3/countries';
        const request = await fetch(url, options);
        const response = await request.json();
        
        setPaises(response.response);
    }
    
    console.log(paises);

    return(
        <div className="countries">
            <h1>Países</h1>
            <div className="lista-paises">
            {paises.length > 0 ? paises.map(pais => (
                <Card />
            )) : <Loader />}
            </div>
        </div>
    );
}