import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import { Navbar, Footer } from './components/index.js';



function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        {routes}
        <Footer className="footer"/>
      </div>

    </div>
  );
}

export default App;
