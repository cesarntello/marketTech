import Navbar from './Componetes/Navbar';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import ItemListContainer from './Componetes/ItemListContainer/ItemListContainer';




function App() {
  return (
    <Router>
     <Navbar></Navbar>
    <ItemListContainer></ItemListContainer>
    </Router>
  );
}

export default App;
