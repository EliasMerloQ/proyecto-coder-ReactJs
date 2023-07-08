import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/Navbar";
import Home from './components/Home/home';
import "./Styles/AppStyles.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import CategoryContainer from './components/categoyContainer/categoryContainer'
import {ROUTES} from './constant/Routes'
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/juegos' element={<ItemListContainer/>}/>
            <Route path='/juegos/:id' element=  {<ItemDetailContainer/>} />
            <Route path={ROUTES.CATEGORY} element=  {<CategoryContainer/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
