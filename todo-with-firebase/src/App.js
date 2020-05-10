import React, { Component } from 'react';
import TaskAdd from './TaskAdd';
import TaskDisplay from './TaskDisplay';

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
  deleteHandler = (idx) => {
    const tasks = this.state.tasks.filter((task, i) => i !== idx)
    this.setState({ tasks })
  }
  onClickHandler = (e) => {
    e.preventDefault(); //form은 기본적으로 추가버튼을 누르면 새로고침된다 그걸 방지하기 위해 이걸 해줌

    const task = { todo: this.state.task };
    const tasks = [...this.state.tasks, task]
    // 이건 잘 모르겠지만 [기존의 배열 , 추가할 데이터] 같음
    this.setState({
      tasks,
      task: ''
    })
  }
  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value // e.target 은 이벤트가 시작된 DOM의 요소를 의미
    })
  }
  render() {

    return (
      <div className="container">
        <TaskAdd
          value={this.state.task}
          changeHandler={this.onChangeHandler}
          clickHandler={this.onChangeHandler}
        ></TaskAdd>
        <div>
          <h2>할일 목록</h2>
          <TaskDisplay
            tasks={this.state.tasks}
            deleteHandler={this.deleteHandler}
          ></TaskDisplay>
        </div>
      </div>
    )
  }
}


export default App;
