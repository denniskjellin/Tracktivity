import { useState } from "react";

const AddSession = () => {
  // set variables
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  

  //handle submit, prevent page from reloading
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const workout = { exercise, reps, weight, date };
    // base url
    const url = "http://localhost:3000/sessions";

    // fetch
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exercise, reps, weight, date }),
    });
   

    // simple controlls, validation
    if(!date > 0) {
      setError("Enter date of exercise")
    }

    if(!weight > 0) {
      setError("Enter a weight")
    }

    if(!reps > 0) {
      setError("Enter amount of reps")
    }

    if(!exercise > 0) {
      setError("Enter a exercise title")
    }


     // if response is bad, throw error
     if (!reps && !date && !exercise && !weight) {
      setError('Please fill in all input fields');
      
    }
    // if response is bad, throw error
  
    // if success, set variables in form to empty and reload the page
    if (response.ok) {
      setExercise("");
      setReps("");
      setWeight("");
      setDate("");
      setError(null);
      window.location.reload();
    }
  };

  return (
    <form className="form-add" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exercise" className="form-label">Exercise Title:</label>
        <input
        placeholder="Benchpress"
          className="form-control mt-.5 mb-1" id="exercise"
          type="text"
          onChange={(e) => setExercise(e.target.value)}
          value={exercise}
        />

        <label htmlFor="reps" className="form-label">Reps:</label>
        <input id="reps"
        placeholder="12r, 10r, 7r, failure"
          className="form-control mt-.5 mb-1" 
          type="text"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />

        <label htmlFor="weight" className="form-label">Weight:</label>
        <input id="weight"
        placeholder="20kg, 18kg, 15kg"
          className="form-control mt-.5 mb-1"
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />

        <label htmlFor="date" className="form-label">Date:</label>
        <input id="date"
        placeholder="yyyy-mm-dd"
          className="form-control mt-.5 mb-1"
          type="text"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <input className="submit" type="submit" value="Submit" />
      {error && <div className="error mt-2">{error}</div>}
    </form>
  );
};

export default AddSession;
