import {Routes, Route} from 'react-router-dom';
import { Home } from '../../pages/Home/index';
import { Ligas } from '../../pages/Ligas/index';
import { LoginPage } from '../../pages/LoginPage';
import { ViewMoreLeague } from '../ViewMoreLeague';
import { ViewMoreYear } from '../ViewMoreYear/index';

export const Content = () => {
    return(
        <Routes>
            <Route path='/' element={<LoginPage />} exact/>
            <Route path='/Home' element={<Home />} exact/>
            <Route path='/Ligas' element={<Ligas />} exact/>
            <Route path='/ViewMoreLeague/:id' element={<ViewMoreLeague />} />
            <Route path='/ViewMoreYear' element={<ViewMoreYear />} />
        </Routes>
    );
}