import React from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import GetSessions from "./components/SessionComponent";

function App() {
  return (
    <MainLayout>
      <h1>Hello from App!</h1>
      <GetSessions></GetSessions>
    </MainLayout>
  );
}

export default App;
