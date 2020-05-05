import React from 'react';
import './App.css';
import Per from "./Person"
function App() {
  return (
    <div className="App">
      <h1>first react practice</h1>
      <h2>react는 최상층 태그가 반드시 1개만 존재해야 한다.</h2>
      <Person />
      <Per></Per>
      <Per></Per>
      <Per></Per>
      <Per></Per>
    </div>//Person 컴포넌트를 호출할때 반드시 첫글자는 대문자로 
    // React.createElement("div", { className: "App" }, React.createElement("h1", null, "first react"))
  );
}
function Person() {
  return <h1>첫 번째 컴포넌트 입니다.</h1>
}
export default App;
