import React from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./index.css";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <h1>Hello from App</h1>
    </MainLayout>
  );
}

export default App;
