/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from './view/List';
import View from './view/View';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="*" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}
