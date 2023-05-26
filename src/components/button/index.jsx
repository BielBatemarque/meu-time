import './Button.css';

export const Button = ({ text, action, disabled}) => {
    return(
        <button className='Button' onClick={action} disabled={disabled}>{text}</button>
    );
}