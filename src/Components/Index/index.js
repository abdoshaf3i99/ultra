import React, { Component } from 'react';
import About from './../About';
import Footer from './../Footer';
import Home from './../Home';
import Navbar from './../Navbar';
import Portfolio from './../Portfolio';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Work from './../Work';
import Contact from './../Contact';

class Index extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}
export default Index;
