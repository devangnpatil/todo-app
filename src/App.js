import React, { Component } from 'react';
import Todos from './Todos'
class App extends Component {
  state = {
    todo:[
      {id:1, content:'Buy some milk'},
      {id:2, content:'Play Cricket'}
    ]
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos's</h1>
        <Todos todos={this.state.todo} />
      </div>
    );
  }
}

export default App;
