
import { Menu } from '../../components/Menu/Menu';
import { Card } from '../../components/Card/index';
import campo from '../../assets/campo.png';
import { globalContext } from '../../context/globalContext';
import './Home.css';
import { Footer } from '../../components/Footer';
import { useEffect, useContext } from 'react';
export const Home = () => {
    console.log();

    const { state } = useContext(globalContext);

    useEffect(() => {
        console.log(state);
    }, [state]);


    return(
        <div className="Home">
            <Menu />
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
                    <img src={campo} alt="campoIMG" className='imgcampo'/>
               </div>
               
            </section>
            <section className='cardList'>
                <Card title={'Ligas'} />
                <Card title={'Times'}/>
                <Card title={'Temporadas'}/>
                <Card title={'Jogadores'}/>
            </section>
            <section>
                <p>apresenta times e ligas</p>
            </section>

            <Footer />
        </div>
    );
}