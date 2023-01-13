import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  } else if (data) {
    return (
      <section>
        {data.map(data => (
          <div key={data._id}>
            <p>Name: {data.activity}</p>
            <p>Duration: {data.duration}</p>
            <p>Note: {data.comment}</p>
            <p>Date: {data.date}</p>
            <button key={data._id}>Delete Btn</button><br></br>
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