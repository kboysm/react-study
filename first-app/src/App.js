import React from 'react';
import './App.css';
import { Person } from "./Person"

class App extends React.Component {
  //이녀석이 원래는 정석
  // constructor(props) {
  //   super(props);
  //   console.log(props.test);
  //   this.state = {
  //     person: [
  //       { name: "ZZZ", age: 56 },
  //       { name: "AAA", age: 85 },
  //       { name: "BBB", age: 45 },
  //     ]
  //   }
  // }

  //이녀석이 요즘 쓰는 사파
  state = {
    person: [
      { name: "ZZZ", age: 56 },
      { name: "AAA", age: 85 },
      { name: "BBB", age: 45 },
    ]
  }
  render() {
    // const { name, age } = this.props; //ES6
    const { person } = this.state;// state 같은 경우 갱신을 위한 함수를 따로 만들어야 한다.
    return (
      <div className="App">
        <h1>{this.props.test}</h1>
        <Person name={person[0].name}
          age={person[0].age}
          st={this.state}
          myfun={() => console.log("LSM")} //myfun을 집어 넣어도 됌 const myfun =() =>{console.log("LSM")} 이런 함수를 
        />
        {/* 안녕하세요! */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">

//       <Person name={"LSM"} age={26} />
//       <Person name={"KST"} age={27} />
//       <Person name={"GST"} age={28} />

//     </div>//Person 컴포넌트를 호출할때 반드시 첫글자는 대문자로 
//     // React.createElement("div", { className: "App" }, React.createElement("h1", null, "first react"))
//     //외부 컴포넌트에 인자를 넘겨 컴포넌트를 재사용 <Person name={"GST"} age={28} />
//   );
// }

export default App;
//props -> 부모 컴포넌트에서 자식컴포넌트로 데이터를 전달
// state -> 컴포넌트 내부에서 선언,값을 변경 할 수 있음 , state를 갖을 수 있는건 class 뿐이다