import React from "react";
import MainLayout from "../layout/MainLayout";
import GetSessions from "../components/GetSessions";
import AddSession from "../components/AddSession";
function SummaryPage() {


  return (
    <MainLayout>
    
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h1>Content for the first cell</h1>
      <GetSessions></GetSessions>
      </div>
      <div className="col-sm-12 col-md-6">
      <h1>Content for the second cell</h1>
      <AddSession></AddSession>
      </div>
      </div>
    </MainLayout>
  );
}

export default SummaryPage;
