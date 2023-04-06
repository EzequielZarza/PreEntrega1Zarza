import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => 
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings={'Bienvenido a Coder-House E-commerce!'}/>
    </div>

export default App;
