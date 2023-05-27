import { Menu } from '../../components/Menu/Menu';
import './Home.css';

export const Home = () => {
    return(
        <div className="Home">
            <Menu />
            <div className='divTitle'>
                <h1>Meu-Time</h1>
            </div>
            <section className='section-home'>
                <p>sessão de apresentação</p>
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