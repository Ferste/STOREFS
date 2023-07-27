import './App.css'
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  const saludo = 'Bienvenido a STOREFS';
  return (
    <><NavBar/>
    <ItemListContainer greeting={saludo}/>
    </> 
  )
}

export default App
