import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({ logo, title, description, viewMore, id }) => {
    return(
        <div className="Cards" id={id}>
            <img src={logo} alt="logo ligas" className='log'/>
            <h3>{title}</h3>
            <span className="text">{description}</span>
                <Link to={viewMore}>Ver mais</Link>
        </div>
    );
}