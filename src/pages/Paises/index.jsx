import { useEffect, useState } from 'react';
import './Paises.css'
import { options } from '../../data/data';
import { Card } from '../..//components/Card/index';

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
           {}
        </div>
    );
}