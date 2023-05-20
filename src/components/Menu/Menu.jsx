import { MenuItem } from '../MenuItem';
import './Menu.css';

export const Menu = () => {
    return(
        <div className="menu">
            <div className="menuItens">
                <nav className='items'>
                    <ul>
                        <li>
                            <MenuItem text={'Ligas'} link={'/Ligas'}/>
                        </li>
                        <li>
                            <MenuItem text={'Ligas'} />
                        </li>
                        <li>
                            <MenuItem text={'Ligas'} />
                        </li>
                        <li>
                            <MenuItem text={'Ligas'} />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );   
}