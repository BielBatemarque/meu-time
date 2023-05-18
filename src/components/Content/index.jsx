import {Routes, Route} from 'react-router-dom';
import { Home } from '../../pages/Home/index';

export const Content = () => {
    return(
        <Routes>
            <Route path='/Home' element={<Home />} />
        </Routes>
    );
}