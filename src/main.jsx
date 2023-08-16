import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import CategoryItemListContainer from "./components/CategoryItemListContainer";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />} />
        <Route path='/item/:itemId' element = {<><NavBar /> <ItemDetailContainer /></>} />
        <Route path='/categoria/:id' element={<><NavBar /> <CategoryItemListContainer /></>} />
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>,
)
