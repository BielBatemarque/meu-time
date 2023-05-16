import {options, url} from './data/data';
import { useEffect, useState } from 'react';

function App() {
  const[time, setTime] = useState([]);

  const handleAsync = async () => {
    const response = await fetch(url, options);
    const json = await response.json();
    setTime(json);
  }

  useEffect(() => {
    handleAsync();
    console.log(time);
  }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;
