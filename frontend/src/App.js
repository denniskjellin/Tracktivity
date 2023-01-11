import React from 'react';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.scss";
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar>
      
      </Navbar>
      <div className="body-bg wrapper">
      <main className="m-1">
      <h1>Hello World!</h1>

      </main>
      <Footer></Footer>
    </div>
   </div>
   </BrowserRouter>
  );
}

export default App;
