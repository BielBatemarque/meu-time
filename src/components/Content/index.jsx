import {Routes, Route} from 'react-router-dom';
import { Home } from '../../pages/Home/index';
import { Ligas } from '../Ligas';
import { LoginPage } from '../../pages/LoginPage';
import { Jogadores } from '../Jogadores/index';
import { Temporadas } from '../Temporadas/index';
import { Times } from '../Times'
import { ViewMoreLeague } from '../ViewMoreLeague';

export const Content = () => {
    return(
        <Routes>
            <Route path='/' element={<LoginPage />} exact/>
            <Route path='/Home' element={<Home />} exact/>
            <Route path='/Jogadores' element={<Jogadores />}/>
            <Route path='/Temporadas' element={<Temporadas />}/>
            <Route path='/Times' element={<Times />}/>
            <Route path='/Ligas' element={<Ligas />} exact/>
            <Route path='/vermaisLiga/' element={<ViewMoreLeague />} />
        </Routes>
    );
}