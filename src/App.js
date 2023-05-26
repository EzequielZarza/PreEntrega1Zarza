import './App.css';
import Navbar from './components/Navbar';
import { ItemDetailContainer, ItemListContainer } from './components/Item/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'
import PurchaseResult from './components/PurchaseResult';
import { BuyerProvider } from './context/BuyerContext';

const App = () => 
  <div className="App">
    <BrowserRouter>
    <BuyerProvider>
      <CartProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={'Bienvenido a Codervak!'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/sale-result' element={<PurchaseResult/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </CartProvider>
      </BuyerProvider>
    </BrowserRouter>
  </div>

export default App;
