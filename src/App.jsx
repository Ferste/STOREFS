import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'; // Importa sin las llaves
import { NavBar } from './components/NavBar';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer />
      {/* <ItemDetailContainer/> */}
    </>
  );
}

export default App;
