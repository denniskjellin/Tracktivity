import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({children}) {
  return (
    <div className="App">
      <Navbar />
      <div className="body-bg wrapper">
        <main className="m-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
