import { MenuItem } from '../MenuItem';
import './Menu.css';

export const Menu = () => {
    return(
        <div className="menu">
            <h2>Componente Menu</h2>
            <MenuItem text={'opa'} />
            <MenuItem text={'opa'} />
            <MenuItem text={'opa'} />
        </div>
    );   
}