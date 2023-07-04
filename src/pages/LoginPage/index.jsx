import './LoginPage.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/index';
import banner from '../../assets/banner.png';
import { globalContext } from '../../context/globalContext';

export const LoginPage = () => {
  const [key, setKey] = useState('');
  const { dispatch } = useContext(globalContext);
  const navigate = useNavigate(); // Importar useNavigate para redirecionamento

  const handleLogin = async () => {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${key}`,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };

    const login = await fetch(url, options);
    if (login.status === 200) {
      dispatch({ type: 'autentication', payload: key });
      navigate('/Home'); // Redirecionar para a página Home usando navigate
    } else {
      console.log(login.status);
    }
  };

  return (
    <div className="loginPage">
      <div className="form">
        <h4 className="title">Insira sua chave da API</h4>
        <input
          type="text"
          className="input"
          onChange={(e) => setKey(e.target.value)}
        />

        <Button text={'Validar'} action={() => handleLogin()} />
      </div>

      <div className="img">
        <img src={banner} alt="banner" className="banner" />
      </div>
    </div>
  );
};