import './ViewMoreLeague.css';
import { useParams } from 'react-router-dom';

export const ViewMoreLeague = ({ match }) => {
    const { id } = useParams();


    console.log(id)
    return(
        <div className="ViewMoreLeague">
            <h1>{id}</h1>
        </div>
    );
}