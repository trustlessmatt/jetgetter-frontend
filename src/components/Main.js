import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/about';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL */}
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  );
}

export default Main;