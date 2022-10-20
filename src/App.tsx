import './App.css';
import HeaderMenu from './components/HeaderMenu';
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderMenu />
      <Home />
      <WhatsappButton text="Contactanos" phone="123456789" message="Hola, quiero comprar un producto" />
    </div>
    </BrowserRouter>
  );
}

export default App;
