import React from "react";

class Form extends React.Component {
    // create state variables, initiating them empry.
    state = {
      activity: '',
      duration: '',
      comment: '',
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
      const { activity, duration, comment, date } = this.state;
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ activity, duration, comment, date })
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
          <label>
            Activity:
            <input type="text" name="activity" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Duration:
            <input type="text" name="duration" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Note:
            <textarea name="comment" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Date:
            <input type="text" name="date" onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Form;