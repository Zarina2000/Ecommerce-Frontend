import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    </div>
  );
}

export default App;
