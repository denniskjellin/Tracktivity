import React from 'react';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";
import './index.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
