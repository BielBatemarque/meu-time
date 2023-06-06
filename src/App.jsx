import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/Content';
import { AppContext } from './context/globalContext';


function App() {
  return (
    <div className="App">
      <AppContext>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </AppContext>

    </div>
  );
}

export default App;
