import Navbar from './Componetes/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Componetes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componetes/Cards/ItemDetailContainer';
import Shop from './Componetes/Shop';



function App() {
 
  return (
    <BrowserRouter>
    
    
     <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/categoria/:catId" element={<ItemListContainer/>}  />
        

         <Route path="/producto/:itemId" element={ <ItemDetailContainer/>}/>
         <Route path="/cart" element={ <Shop/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
