import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/Navbar";
import DealsTable from "./components/itemList/itemList.jsx"
import "./AppStyles.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="bakgroundLanding">
        <DealsTable/>
      </div>
    </div>
  );
}

export default App;
