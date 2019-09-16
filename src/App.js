import React from 'react';
import { BroswerRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Router path="/" exact component={ExercisesList} />
      <Router path="/edit/:id" component={EditExercise} />
      <Router path="/create" component={CreateExercise} />
      <Router path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
