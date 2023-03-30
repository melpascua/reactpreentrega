import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer hola={'Hola, me llamo Mel y esta es mi prueba de ReactJS'}/>
    </div>
  );
}

export default App;
