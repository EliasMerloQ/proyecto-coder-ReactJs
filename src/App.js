import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/Navbar";
import Home from './components/Home/home';
import "./Styles/AppStyles.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {ROUTES} from './constant/Routes'
import Cart from './components/cart/cart';
import { CartProvider } from './context/cartContext';
import FormContainer from './components/formContainer/formContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <ToastContainer/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/juegos' element={<ItemListContainer/>}/>
            <Route path='/juegos/:id' element=  {<ItemDetailContainer/>} />
            <Route path={ROUTES.CATEGORY} element=  {<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<FormContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
