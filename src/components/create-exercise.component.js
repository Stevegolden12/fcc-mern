import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserDescription = this.onChangeUserDescription.bind(this);
    this.onChangeUserDuration = this.onChangeUserDuration.bind(this);
    this.onChangeUserDate = this.onChangeUserDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username,
          })
        }
      })
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeUserDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeUserDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeUserDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }

    console.log(exercise)

    axios.post('http://localhost:5000/users/add', exercise)
      .then(res => console.log(res.data))

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}>
              {this.state.users.map(function(user){
                return <option
                  key={user}
                  value={user}>{user}/>
                  </option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}