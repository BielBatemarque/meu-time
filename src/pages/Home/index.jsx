import { useContext } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { Button } from '../../components/button';
import './Home.css';
import { globalContext } from '../../context/globalContext';

export const Home = () => {
    const contexto = useContext(globalContext);
    console.log(contexto);

    return(
        <div className="Home">
            <Menu />
            <div className='divTitle'>
                <h1>Meu-Time</h1>
            </div>
            <section className='section-home'>
                <p>sessão de apresentação</p>
                <Button text={'Lougout'} action={() => console.log('deslogar criando um estado global da função que seta algumas informações como logado')}/>
            </section>
            <section>
                <p>sessão sobre apresentação da aplicação</p>
            </section>
            <section>
                <p>apresenta times e ligas</p>
            </section>
        </div>
    );
}