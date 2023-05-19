import { MenuItem } from '../MenuItem';
import './Menu.css';

export const Menu = () => {
    return(
        <div className="menu">
            <h2>Componente Menu</h2>
            <div className="menuItens">
                <MenuItem text={'opa'} />
                <MenuItem text={'opa'} />
                <MenuItem text={'opa'} />
            </div>
        </div>
    );   
}