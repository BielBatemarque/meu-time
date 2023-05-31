import './Card.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ logo, title, description, cardId }) => {
    const [id, setId] = useState(null);
    console.log(id);
    const linkTo = `/vermaisLiga/:${id}`;

    return(
        <div className="Cards" id={id}>
            <img src={logo} alt="logo ligas" className='log'/>
            <h3>{title}</h3>
            <span className="text">{description}</span>
            <button className='btnVerMais' onClick={() => setId(cardId)}><Link to={linkTo}>Ver Mais</Link></button>
        </div>
    );
}