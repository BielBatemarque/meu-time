
import { Menu } from '../../components/Menu/Menu';
import { Button } from '../../components/button';
import './Home.css';
export const Home = () => {
    return(
        <div className="Home">
            <Menu />
            <div className='divTitle'>
                <h1>Meu-Time</h1>
            </div>
            <section className='section-home'>
               <div className='dh1'></div>
               <div className='dh1'></div>
               
            </section>
            <section>
                <p>sessão sobre apresentação da aplicação</p>
            </section>
            <section>
                <p>apresenta times e ligas</p>
                <Button text={'Lougout'} action={() => console.log('deslogar criando um estado global da função que seta algumas informações como logado')}/>
            </section>
        </div>
    );
}