import './MenuItem.css';
import { Link } from 'react-router-dom';

export const MenuItem = ({ text, link }) => {
    return(
        <Link to={link}>{text}</Link>
    );
}