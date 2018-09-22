import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'David', age: 30 },
      { name: 'Peter', age: 32 },
      { name: 'Jaina', age: 40 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Arthas', age: 38 },
        { name: 'Jaina', age: 35 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'David', age: 30 },
        { name: event.target.value, age: 32 },
        { name: 'Jaina', age: 40 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({showPersons: !doseShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age} />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler} >Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
