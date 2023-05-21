import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { CartProvider } from './context/cartContext';

const App = () => 
  <div className="App">
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={'Bienvenido a Codervak!'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </div>

export default App;
