import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
