import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Blueprint from './pages/Roadmap';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL */}
      <Route path='/' element={<Home />}></Route>
      <Route path='/blueprint' element={<Blueprint />}></Route>
    </Routes>
  );
}

export default Main;