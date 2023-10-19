import './App.css';
import Hello from  './components/Hello.js';
import Card from './components/Card.js'

function App() {
  return (
    <>
      <Hello/>
      <Hello nome = "Sicrano"/>
      <Hello nome = "Beltrano"/>
      <Card titulo="Produto 1">
        <p>Descricao</p>
      </Card>
      <Card titulo="Produto 2">
        <p>Descricao</p>
      </Card>
    </>
    
  );
}

export default App;
