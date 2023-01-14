import React from "react";
import MainLayout from "../layout/MainLayout";
import GetSessions from "../components/GetSessions";
import AddSession from "../components/AddSession";
function SummaryPage() {


  return (
    <MainLayout>
    <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-8 ">
        <h1 className="mt-5">Overview</h1>
      <GetSessions></GetSessions>
      </div>
      <div className="col-sm-12 col-md-4">
      <h2 className="mt-5">Add Ecercise</h2>
      <AddSession></AddSession>
      </div>
      </div>
      </div>
    </MainLayout>
  );
}

export default SummaryPage;
