import { MenuItem } from '../MenuItem';
import './Menu.css';

export const Menu = () => {
    return(
        <div className="menu">
            <div className="menuItens">
                <nav className='items'>
                    <ul>
                        <li>
                            <MenuItem text={'Ligas'} link={'/Ligas'} />
                        </li>
                        <li>
                            <MenuItem text={'Jogadores'} link={'/Jogadores'}/>
                        </li>
                        <li>
                            <MenuItem text={'Temporadas'} link={'/Temporadas'}/>
                        </li>
                        <li>
                            <MenuItem text={'Times'}  link={'/Times'}/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );   
}