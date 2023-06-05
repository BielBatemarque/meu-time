import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/Content';
import { globalContext, globalState } from './context/globalContext';


function App() {
  return (
    <div className="App">
      <globalContext.Provider value={globalState}>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </globalContext.Provider>
    </div>
  );
}

export default App;
