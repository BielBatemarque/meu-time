import './Input.css';

export const Input = ({ search, value, text }) => {
    return(
        <div className='divInput'>
            <input type="text" className="InputComponent" onChange={search} value={value} placeholder={text}/>
        </div>
    );
}