import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    {/* <Sidebar></Sidebar> */}
    <Outlet></Outlet>
    </div>
  );
}

export default App;
