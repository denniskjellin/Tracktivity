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
      <section style={{
        display: 'flex', flexFlow: 'row', flexWrap: 'wrap'}
    }>
        {data.map(data => (
          
          <div key={data._id} className="col-sm-12 col-md-5 m-1 card">
            <img className="dumbell card-img-top" src={myImage} alt="dumbell logo" />
            <div className="card-body">
            <h5 className="card-title">Exercise: {data.exercise}</h5>
            <p className="card-text">Reps: {data.reps}</p>
            <p className="card-text">Weight: {data.weight}</p>
            <p>Date: {data.date}</p>
            <span onClick={() => clickDelete(data._id)}>Delete</span><br></br>
            <br></br>
            </div>
          </div>
        ))}
      </section>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default GetSessions;