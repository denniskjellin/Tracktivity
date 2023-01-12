import React from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import AddSession from "./components/AddSession";

function App() {
  return (
    <MainLayout>
      <h1>Hello from App</h1>
      <AddSession />
    </MainLayout>
  );
}

export default App;
