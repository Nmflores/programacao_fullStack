import logo from './logo.svg';
import './App.css';
import lista from "./data/produtos.json";
import ListCards from './components/listaCards';
import Counter from "./components/Counter";
import Color from './components/ChangeColor';
import Carrosel from './components/Carrosel'

function App() {
  return (
   <>
      <Counter>

      </Counter>
      <Color></Color>
      <ListCards lista = {lista}>

      </ListCards>
      <Carrosel></Carrosel>
      
      
    </>
  );
}

export default App;
