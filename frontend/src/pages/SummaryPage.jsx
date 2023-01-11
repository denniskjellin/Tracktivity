import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function SummaryPage() {
  return (
    <div className="App">
      <Navbar />
      <div className="body-bg wrapper">
      <main className="m-1">
      <h1>Hello Summary!</h1>
      </main>
      <Footer />
    </div>
   </div>
  );
}

export default SummaryPage;
