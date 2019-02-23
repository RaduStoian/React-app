import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


const App = () => {
  
  return (
    <div>
    <Header />
    <MainContent />
    <Footer />
    </div>
  )
}

export default App;
