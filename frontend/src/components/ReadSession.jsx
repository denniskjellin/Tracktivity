import React from "react";
import myImage from "../images/dumbell.png";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const ReadSession = ({ data, handleEditClick }) => {
  const deleteEndpoint = "http://localhost:3000/sessions";
  const clickDelete = async (id) => {
    try {
      // add id to the deleteEndpoint
      await axios.delete(`${deleteEndpoint}/` + id);
      //reload window when something is deleted
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // format card with the data
    <div key={data._id} className="col-sm-12 col-md-5 m-1 card">
      <img className="dumbell card-img-top" src={myImage} alt="dumbell logo" />
      <div className="card-body">
        <h2 className="h3 mb-4 exercise-title">{data.exercise}</h2>
        <h3 className="h5">Reps: </h3>
        <p>{data.reps}</p>
        <h3 className="h5">Weight: </h3>
        <p>{data.weight}</p>
        <h3 className="h5">Date: </h3>
        <p>{data.date}</p>
        <button className="delete" onClick={() => clickDelete(data._id)}>
          <FaTrashAlt></FaTrashAlt> Delete
        </button>
        <button onClick={(event) => handleEditClick(event, data)} className="submit m-2" type="submit" value="Submit">Edit</button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ReadSession;
