import './Card.css';
import { useState } from 'react';

export const Card = ({ logo, title, description, cardId, action }) => {
    const [id, setId] = useState(null);
    console.log(id);

    return(
        <div className="Cards" id={id}>
            <img src={logo} alt="logo ligas" className='log'/>
            <h3>{title}</h3>
            <span className="text">{description}</span>
            <button className='btnVerMais' onClick={() => setId(cardId)}> ver mais</button>
        </div>
    );
}