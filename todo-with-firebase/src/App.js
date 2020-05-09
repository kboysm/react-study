import React, { Component } from 'react';

class App extends Component {
  state = {
    tasks: [
      { todo: "할일 0" },
      { todo: "할일 1" },
      { todo: "할일 2" },
      { todo: "할일 3" },
    ],
    task: ''
  }
  onClickHandler = (e) => {
    e.preventDefault();

    const task = { todo: this.state.task };
    const tasks = [...this.state.tasks, task]
    this.setState({
      tasks,
      task: ''
    })
  }
  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value
    })
  }
  render() {
    const taskDisplay = this.state.tasks.map((task, i) => {
      return (
        <div key={i}>
          <p >{task.todo}</p>
          <button>삭제</button>
        </div>
      )
    })
    return (
      <div className="App">
        <div>
          <input value={this.state.task} onChange={this.onChangeHandler}></input>
          <button onClick={this.onClickHandler}>저장</button>
        </div>
        <div>
          {taskDisplay}
        </div>
      </div>
    )
  }
}

export default App;
