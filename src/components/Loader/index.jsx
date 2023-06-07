import './Loader.css';

export const Loader = ({ text }) => {
    return(
        <>
            <h3>{text}</h3>
            <div className="custom-loader"></div>
        </>
    );
};