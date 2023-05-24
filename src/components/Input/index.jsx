import './Input.css';

export const Input = ({ search, value, text }) => {
    return(
        <div className='divInput'>
            <input type="text" className="input" onChange={search} value={value} placeholder={text}/>
        </div>
    );
}