import React, { Component } from 'react';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      gpa: 0,
      campusId: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addStudent(this.state)

    this.setState({
            firstName: '',
            lastName: '',
            email: '',
            image: '',
            gpa: 0,
            campusId: null
          });
  }

  render(){

    const {firstName, lastName, email, gpa, campus} = this.state
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            value={firstName}
          />
        </label>

        <label>
          Last Name:
          <input
            onChange={this.handleChange}
            type="text"
            name="lastName"
            
            value={lastName}
          />
        </label>

        <label>
          Email:
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            
            value={email}
          />
        </label>

        <label>
          GPA:
          <input
            onChange={this.handleChange}
            type="text"
            name="gpa"
            
            value={gpa}
          />
        </label>

        <label>
          
          Campus:
          {this.props.campuses.locations ? <select name="campusId" onChange = {this.handleChange}>
          {this.props.campuses.locations
          .map(campus => 
            (<option type="select" value={campus.id} key={campus.id} 
             >{campus.name}</option>))}
          </select> : <div></div>}
          
        </label>

        <button type="submit">Submit New Student</button>
      </form> 
      </div>
    )
  }
}

export default NewStudentForm
