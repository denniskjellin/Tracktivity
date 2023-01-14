import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({children}) {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-body-bg wrapper m-1">
        <main className="m-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
