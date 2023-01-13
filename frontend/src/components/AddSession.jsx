import React from "react";


class Form extends React.Component {
    // create state variables, initiating them empry.
    state = {
      exercise: '',
      reps: '',
      weight: '',
      date: ''
    }
    // Triggered when some value are changed/entered in the form input fields.
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    // handler for submit, fetch url + method post. Stringify the data.
    handleSubmit = (event) => {
        const url = "http://localhost:3000/sessions"
      event.preventDefault();
      const { exercise, reps, weight, date } = this.state;
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ exercise, reps, weight, date })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    // HTML with the form and handler on change and submit
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
          <label className="form-label">
            Exercise:
            <input className="form-control" type="text" name="exercise" onChange={this.handleChange} />
          </label>
          <br />
          <label className="form-label">
            Reps:
            <input className="form-control" type="text" name="reps" onChange={this.handleChange} />
          </label>
          <br />
          <label className="form-label">
            Weight:
            <input className="form-control" name="weight" onChange={this.handleChange} />
          </label>
          <br />
          <label className="form-label">
            Date:
            <input className="form-control" type="text" name="date" onChange={this.handleChange} />
          </label>
          <br />
          </div>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Form;