import React from 'react';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <body class="body-col-main">
      <Navbar></Navbar>
      <main>
      <h1>Hello World</h1>

      </main>
      <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
