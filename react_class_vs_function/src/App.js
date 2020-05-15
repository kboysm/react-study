import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      Hello World
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}
let funcStyle = 'color:blue';
let funcId = 0;
function FuncComp(props) { //함수방식으로 state사용시 useState를 호출
  let numberState = useState(props.initNumber);
  let number = numberState[0] //props로 건내받은 데이터가 담김
  let setNumber = numberState[1]; //넘버의 값을 바꿀수 있는 함수가 담김

  // let dateState = useState((new Date().toString()));
  // let _date = dateState[0]
  // let setDate = dateState[1];

  let [_date, setDate] = useState((new Date()).toString()) //위의 선언과 똑같음

  console.log('numberState', numberState);
  console.log('%cfunc => render' + (++funcId), funcStyle)
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
        function () {
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="date" onClick={
        function () {
          setDate((new Date().toString()));
        }
      }></input>
      {}
    </div>
  )
}
let classStyle = 'color:red';
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle)
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle)
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle)
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle)
  }
  render() {
    console.log('%cclass => render', classStyle)

    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function () {
            this.setState({ number: Math.random() })
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function () {
            this.setState({ date: (new Date()).toString() })
          }.bind(this)
        }></input>
      </div>
    )
  }
}
export default App;
