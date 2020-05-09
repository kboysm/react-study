import React from 'react';
import Button from './Button';
import Display from './Display'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    // this.onClickHandler = this.onClickHandler.bind(this); 정상적인 문법에서는 이렇게 하지만 ()=>를 사용하면 this가 자동으로 바인딩 된다.

  }
  onClickHandler = (payload) => {

    this.setState({ number: this.state.number + payload }) // state를 갱신할 때는 꼭 setState를 사용해야한다. 사용하지 않으면 number의 값은 오르지만 화면에는 증가한 number값 출력 안댐
  }

  render() {
    return (
      <div className="container has-text-centered">
        <Display value={this.state.number}></Display>
        <Button className="button is-primary is-fullwidth" onClickHandler={() => this.onClickHandler(1)}>증가</Button>
        <Button className="button is-info is-fullwidth" onClickHandler={() => this.onClickHandler(-1)}>감소</Button>

      </div>
    );
  }
}


export default App;
