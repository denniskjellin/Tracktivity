import React, { useState, useEffect } from "react";
import axios from "axios";
import ReadSession from "./ReadSession";


function GetSessions() {
  // set variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // base url for axios
  const url = "http://localhost:3000/sessions";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
      // fire method once
  }, []);

 // below I write out the session stored in database with the help of component ReadSession.jsx
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  } else if (data) {
    return (
      <section
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
        }}
      >
        {data.map((data) => (
          <ReadSession data={data} />
        ))}
      </section>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default GetSessions;
