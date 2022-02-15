import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue',
        fontSize: "1.5rem"
      };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-links_logo">
                <img src='https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png' style={{width: '200px', height: '150px'}} alt="mindsetpacks_logo" />
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <Link to="/products" style={linkStyle}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/MYOG" style={linkStyle}>MYOG</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contractwork" style={linkStyle}>ContractWork</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" style={linkStyle}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;