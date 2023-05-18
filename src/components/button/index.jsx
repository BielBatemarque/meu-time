import './Button.css';

export const Button = ({ text, action}) => {
    return(
        <button className='Button' onClick={action}>{text}</button>
    );
}