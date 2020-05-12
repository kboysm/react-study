import React, { Component } from 'react';
import TaskAdd from './TaskAdd';
import TaskDisplay from './TaskDisplay';
import { firestore } from './firebase'
class App extends Component {
  state = {
    tasks: [

    ],
    task: ''
  }
  componentDidMount() {
    const tasks = [...this.state.tasks]
    firestore.collection('tasks').get().then(docs => {
      docs.forEach(doc => {
        tasks.push({ todo: doc.data().todo, id: doc.id })
      })
      this.setState({ tasks })
    })
  }
  deleteHandler = (id) => {
    firestore.collection('tasks').doc(id).delete()
      .then(() => {
        const tasks = this.state.tasks.filter((task) => task.id !== id)
        this.setState({ tasks });
      })
  }
  onClickHandler = (e) => {
    e.preventDefault(); //form은 기본적으로 추가버튼을 누르면 새로고침된다 그걸 방지하기 위해 이걸 해줌

    firestore.collection('tasks').add({ todo: this.state.task })
      .then(r => {
        const tasks = [...this.state.tasks, { todo: this.state.task, id: r.id }];
        this.setState({
          tasks,
          task: ''
        })
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
          clickHandler={this.onClickHandler}
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
