import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import routes from './routes';
import { Navbar } from './components/index.js';



function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        {routes}
      </div>
    </div>
  );
}

export default App;
