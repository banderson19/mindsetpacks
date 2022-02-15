import React from "react";
import { Routes, Route} from 'react-router-dom';
import { About, ContractWork, MYOG, Products } from './components/index.js';


export default (
    <Routes>
          <Route path="/" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contractwork" element={<ContractWork />} />
          <Route path="MYOG" element={<MYOG />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Products />} />
    </Routes>
)