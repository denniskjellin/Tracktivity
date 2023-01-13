import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myImage from '../images/dumbell.png'

function GetSessions() {

  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const url = 'http://localhost:3000/sessions'
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const deleteEndpoint = 'http://localhost:3000/sessions';
  const clickDelete = async (id) => {
    try {
      // add id to the deleteEndpoint
      const response = await axios.delete(`${deleteEndpoint}/` + id);
      console.log(response);
      //reload window when something is deleted
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  }


  if (error) {
    return <p>An error occurred: {error.message}</p>;
  } else if (data) {
    return (
      <section>
        {data.map(data => (
          <div key={data._id}>
            <img className="dumbell" src={myImage} alt="My Image" />
            <p>Exercise: {data.exercise}</p>
            <p>Reps: {data.reps}</p>
            <p>Weight: {data.weight}</p>
            <p>Date: {data.date}</p>
            <span onClick={() => clickDelete(data._id)}>Delete</span><br></br>
            <br></br>
          </div>
        ))}
      </section>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default GetSessions;