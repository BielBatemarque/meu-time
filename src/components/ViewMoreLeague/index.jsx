import { Menu } from '../Menu/Menu';
import './ViewMoreLeague.css';
import { useParams } from 'react-router-dom';

export const ViewMoreLeague = ({ match }) => {
    const { id } = useParams();
    let confirmId = id.substring(1);
    confirmId = Number(confirmId);

    const getInfoLeagues = async () => {
        const request = await fetch('');
        const json = await request.json();

        return(json);
    }

    return(
        <div className="ViewMoreLeague">
            <Menu />
            <h1>{confirmId}</h1>
        </div>
    );
}