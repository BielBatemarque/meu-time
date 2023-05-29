import './Card.css';
import React, { useState } from 'react';

export const CardContext = React.createContext();

export const Card = ({ logo, title, description, cardId, action }) => {
    const [id, setId] = useState(null);
    console.log(id);

    return(
    <CardContext.Provider  value={{id, setId}}>
        <div className="Cards" id={id}>
            <img src={logo} alt="logo ligas" className='log'/>
            <h3>{title}</h3>
            <span className="text">{description}</span>
            <button className='btnVerMais' onClick={() => setId(cardId)}> ver mais</button>
        </div>
    </CardContext.Provider>
    );
};


