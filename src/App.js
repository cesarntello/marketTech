import Navbar from './Componetes/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Componetes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componetes/Cards/ItemDetailContainer';
import Shop from './Componetes/Cart';
import { CartProvider } from './Context/CartContext';


function App() {
 
  return (

    <CartProvider>
    <BrowserRouter>
     
    
     <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/categoria/:catId" element={<ItemListContainer/>}  />
        

         <Route path="/producto/:itemId" element={ <ItemDetailContainer/>}/>
         <Route path="/cart" element={ <Shop/>}/>
      </Routes>
    
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
