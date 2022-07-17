import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Courses from './Courses';
import About from './About';

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
