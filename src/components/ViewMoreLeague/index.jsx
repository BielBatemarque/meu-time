import './ViewMoreLeague.css';
import { useParams } from 'react-router-dom';

export const ViewMoreLeague = ({ match }) => {
    const { id } = useParams();
    let confirmId = id.substring(1);
    confirmId = Number(confirmId);

    return(
        <div className="ViewMoreLeague">
            <h1>{confirmId}</h1>
        </div>
    );
}