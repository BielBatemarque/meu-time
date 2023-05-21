import {Routes, Route} from 'react-router-dom';
import { Home } from '../../pages/Home/index';
import { Ligas } from '../Ligas';
import { LoginPage } from '../../pages/LoginPage';

export const Content = () => {
    return(
        <Routes>
             <Route path='/' element={<LoginPage />} exact/>
            <Route path='/Home' element={<Home />} exact/>
            <Route path='/Jogadores'/>
            <Route path='/Temporadas' />
            <Route path='/Times' />
            <Route path='/Ligas' element={<Ligas />} exact/>
        </Routes>
    );
}