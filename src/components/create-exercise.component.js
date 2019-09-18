import React, { Component } from 'react';

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

    window.location = "/";
  }

  render() {
    return (
      <div>
        <p>You are on the Create Exercises component!</p>
      </div>
    )
  }
}