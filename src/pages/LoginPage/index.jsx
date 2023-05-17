import './LoginPage.css';
import { useState } from 'react';

export const LoginPage = () => {
    const [key, setkey] = useState('');

    return(
        <div className="loginPage">
            <h1>Meu Time</h1>
                <div>
                    <h3>Insira de Chave da API-Football</h3>
                    <input type="text" placeholder='insira sua chave' onChange={(e) => setkey(e.target.value)}/>
                </div>
        </div>
    );
}