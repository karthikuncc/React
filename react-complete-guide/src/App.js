import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name:'Karthik test',age:29},
      {name:'Ram',age:29},

    ],

    otherState:'Some other state'
    
  }

  switchHandler=()=>{
   this.setState( {
    persons: [
    {name:'Karthik 1',age:29},
    {name:'Ram 1',age:29}

  ]})

  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <button onClick={this.switchHandler}>Switch Name </button>
        <Person name={this.state.persons[0].name} age="23"/>
        <Person name={this.state.persons[1].name} age="23"/>
      </div>
    );
//  return React.createElement('div',null,'h1','Hi, I am React app');
  }
}

export default App;
