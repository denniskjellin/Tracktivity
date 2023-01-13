import React from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./index.css";
import MainLayout from "./layout/MainLayout";



function App() {
  return (
    <MainLayout>
      <div className="row">
      <div className="col-sm-12 col-md-6">
        <h1>Content for the first cell</h1>
      
      </div>
      <div className="col-sm-12 col-md-6">
      <h2>Content for the second cell</h2>
      
      </div>
      </div>
  
    </MainLayout>
  );
}

export default App;
