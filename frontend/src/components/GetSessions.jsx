import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import ReadSession from "./ReadSession";
import EditableSession from "./EditableSession";

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

  // handle click on edit button
  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditSessionId(data._id);
  };
  // set to null
  const [editSessionId, setEditSessionId] = useState(null);
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
          <Fragment key={data._id}>
            {editSessionId === data._id ? (
              <EditableSession />
            ) : (
              <ReadSession
                data={data}
                key={data._id}
                handleEditClick={handleEditClick}
              />
            )}
          </Fragment>
          //write out Sessions from database, from ReadSessions component
        ))}
      </section>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default GetSessions;
