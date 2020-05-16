import React, { useState, useEffect } from 'react';
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
  // let numberState = useState(props.initNumber);
  // let number = numberState[0] //props로 건내받은 데이터가 담김
  // let setNumber = numberState[1]; //넘버의 값을 바꿀수 있는 함수가 담김

  // let dateState = useState((new Date().toString()));
  // let _date = dateState[0]
  // let setDate = dateState[1];

  let [_date, setDate] = useState((new Date()).toString()) //위의 선언과 똑같음
  let [number, setNumber] = useState(props.initNumber) //위의 선언과 똑같음
  useEffect(function () {
    console.log('%cfunc => useEffect (componentDidMount & componentUpdate)' + (++funcId), funcStyle)
    document.title = number;
    return function () { //클린 업 : 컴포넌트에 변화가 생기면 리턴 함수가 호출되고 다시 useEffect가 호출 되도록 함
      console.log('%cfunc => useEffect return (componentDidMount & componentUpdate)' + (++funcId), funcStyle)
    }
  }, [number]);//[number]을 넣어 줌으로써 배열안에 원소의 상태가 바뀌었을때에만 첫번째 인자인 콜백함수가 실행


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
