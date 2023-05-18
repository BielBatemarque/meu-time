import './LoginPage.css';
import { useState } from 'react';
import { Button } from '../../components/button/index';
import banner from '../../assets/banner.png';

export const LoginPage = () => {
    const [key, setkey] = useState('');

    const realizaLogn = async () => {
        const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${key}`,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
        const login = await fetch(url, options);
        if(login.status === 200){
            console.log('deu certo');
        }else{
            console.log(login.status);
        }
        
    }

    return(
        <div className="loginPage">
           <div className="form">
                <h4 className='title'>Insira sua chave da API</h4>
                <input type="text" className='input' onChange={(e) => setkey(e.target.value)}/>

                <Button text={'Validar'} action={() =>realizaLogn()} />
           </div>

           <div className="img">
                <img src={banner} alt="banner" className='banner'/>
           </div>
        </div>
    );
}