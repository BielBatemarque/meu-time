

export const Button = ({ text, action}) => {
    return(
        <button onClick={action}>{text}</button>
    );
}