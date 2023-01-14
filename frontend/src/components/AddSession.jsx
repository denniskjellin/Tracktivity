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

    const activity = { exercise, reps, weight, date };
    // base url
    const url = "http://localhost:3000/sessions";

    // fetch
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exercise, reps, weight, date }),
    });
    const json = await response.json();

    // if response is bad, throw error
    if (!response.ok) {
      setError(json.error);
    }
    // if success, set variables in form to empty and reload the page
    if (response.ok) {
      setExercise("");
      setReps("");
      setWeight("");
      setDate("");
      setError(null);
      console.log("new exercise added.", json);
      window.location.reload();
    }
  };

  return (
    <form className="form-add" onSubmit={handleSubmit}>
      <h3>Add a new exercise</h3>
      <div className="mb-3">
        <label className="form-label">Exercise Title:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setExercise(e.target.value)}
          value={exercise}
        />

        <label className="form-label">Reps:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />

        <label className="form-label">Weight:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />

        <label className="form-label">Date:</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};

export default AddSession;
