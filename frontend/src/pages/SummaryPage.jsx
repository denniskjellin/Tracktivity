import React from "react";
import MainLayout from "../layout/MainLayout";
import axios from "axios"
import {useState, useEffect} from "react";

function SummaryPage() {
  const baseUrl = "http://localhost:3000/sessions"
const [sessions, setSession] = useState([])

useEffect(() =>{
  fetchData();
}, [])

const fetchData = async () => {
  const {data} = await axios.get(baseUrl)

  setSession(data)
}
  
  return (
    <MainLayout>
      <h1>Hello from Mainlayout</h1>
      {sessions.map(post => (
        <div key={post.id}>
          <h5>{post.activity}</h5>
          <p>Delete</p>
          <p>{post.duration}</p>
          <p>{post.comment}</p>
          <p>{post.date}</p>
        </div>
      ))}
    
    </MainLayout>
  );
}

export default SummaryPage;
