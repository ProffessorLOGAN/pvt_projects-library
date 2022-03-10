import './App.css';
import React from 'react';
import { Component } from 'react';
// import ReactDOM from 'react-dom';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        {this.State.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }


}

export default App;
