import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/Navbar";
import CommingSoon from "./assets/images-removebg-preview.png"
import "./AppStyles.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="bakgroundLanding">
        <img src={CommingSoon} className="commingSoon"></img>
      </div>
    </div>
  );
}

export default App;
