import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/Navbar";
import Home from './components/Home/home';
import "./Styles/AppStyles.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import IdView from './components/idView/idView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/juegos' element={<ItemListContainer/>}/>
         <Route path='/juegos/:id' element={<IdView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
