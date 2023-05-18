import './LoginPage.css';
import { useState } from 'react';
import { Button } from '../../components/button/index';
import banner from '../../assets/banner.png';

export const LoginPage = () => {
    const [key, setkey] = useState('');

    return(
        <div className="loginPage">
           <div className="form">
                <h4 className='title'>Insira sua chave da API</h4>
                <input type="text" className='input' onChange={(e) => setkey(e.target.value)}/>
                <Button text={'Validar'} action={() => console.log(key)} />
           </div>

           <div className="img">
                <img src={banner} alt="banner" className='banner'/>
           </div>
        </div>
    );
}