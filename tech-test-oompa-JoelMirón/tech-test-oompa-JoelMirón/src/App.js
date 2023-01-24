import Navigation from 'components/Navigation/Navigation';
import './App.css';
import 'scss/Master.scss'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
 
 <BrowserRouter>
      <Navigation/>
      </BrowserRouter>

    </div>
  );
}

export default App;
