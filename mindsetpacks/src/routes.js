import React from "react";
import { Routes, Route} from 'react-router-dom';
import {Home, About, ContractWork, MYOG, Products, Product } from './components/index.js';


export default (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contractwork" element={<ContractWork />} />
          <Route path="MYOG" element={<MYOG />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
    </Routes>
)