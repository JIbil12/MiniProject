import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HelloWorld from './Helloworld.js';
import SignUpForm from './components/SignUpForm.js';
import Home from './components/Home.js';
import Fhome from './components/Fhome.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignUpForm />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faculty_home" element={<Fhome />} />
      </Routes>
    </Router>
  );
}

export default App;