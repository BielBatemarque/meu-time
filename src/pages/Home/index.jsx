import campo from '../../assets/campo.png';
import { globalContext } from '../../context/globalContext';
import './Home.css';
import React,{ useEffect, useContext, useState } from 'react';
import { options } from '../../data/data';
import { Footer } from '../../components/Footer/index';

export const Home = () => {
    const { state } = useContext(globalContext);
    const [imageLeague, setImageLeague] = useState('');

    useEffect(() => {
        console.log(state);
    }, [state]);

    useEffect(() => {
        loadLeagueImage();
    }, []);

    const handleSorteiaNumero = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const loadLeagueImage = async () => {
        const request = await fetch('https://api-football-v1.p.rapidapi.com/v3/leagues', options);
        const response = await request.json();
        const ligas = await response.response;
        const liga = ligas[handleSorteiaNumero(0, 1020)];
        const { league } = liga;
        const { logo } = league;

        setImageLeague(logo);
    }

    return (
        <div className="Home">
            <div className='divTitle'>
                <h1>Meu-Time</h1>
            </div>
            <section className='section-home'>
                <div className='dh1'>
                    <h2 className='title-descricao'>Informações</h2>
                    <p className='descricao'>Informações sobre Futebol, fazendo consumo da API publica disponibilizada pela API-Sportsbr <br />
                    Sendo Possivel consultar tudo sobre o mundo do Futebol
                    </p>

                </div>
                <div className='dh1'>
                    <img src={campo} alt="campoIMG" className='imgcampo' />
                </div>

            </section>

            <Footer />
        </div>
    );
}
