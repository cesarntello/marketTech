import Navbar from './Componetes/Navbar';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import ItemListContainer from './Componetes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componetes/Cards/ItemDetailContainer';



function App() {
  return (
    <Router>
     <Navbar/>
         <ItemListContainer/>
         <ItemDetailContainer/>
    </Router>
  );
}

export default App;
