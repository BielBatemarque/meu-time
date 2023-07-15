import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/Content';
import { useContext, useEffect } from 'react';
import { globalContext } from './context/globalContext';
import { Menu } from './components/Menu/Menu';

function App() {
  const { state } = useContext(globalContext);
  console.log(state);

  useEffect(() => {
    console.log(state.logado);
}, [state]);

  return (
    <div className="App">
        <BrowserRouter>
          {state.logado ? <Menu /> : false}
          <Content />
        </BrowserRouter>
    </div>
  );
}

export default App;