import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const EditableSession = () => {
  return (
    
      <div className="mb-3">
        <label htmlFor="exercise" className="form-label">
          Exercise
        </label>
        <input className="form-control mt-.5 mb-1" id="exercise" />

        <label htmlFor="reps" className="form-label">
          Reps
        </label>
        <input className="form-control mt-.5 mb-1" id="reps" />

        <label htmlFor="weight" className="form-label">
          Weight
        </label>
        <input className="form-control mt-.5 mb-1" id="weight" />

        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input className="form-control mt-.5 mb-1" id="date" />
      
      <button className="submit" type="submit" value="Submit">
        Submit <FaAngleDoubleRight></FaAngleDoubleRight>
      </button>
      </div>
    
  );
};

export default EditableSession;
