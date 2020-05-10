import React from 'react'
const TaskAdd = ({ value, changeHandler, clickHandler }) => {
    return (
        <div>
            <form>
                <input value={value} onChange={changeHandler}></input>
                {/* 내 생각에는 value={this.state.task} 이 부분이 Vue에서 v-model로 data를 연결하는것과 비슷해 보임
                확실히 react가 쓰기는 더 불편함 onChange를 추가해야함 대신 공부하기는 더 좋은거같음 자바스크립트를 더 많이 구석구석 공부하게 됌
            */}
                <button onClick={clickHandler}>저장</button>
            </form>
        </div>
    )
}
export default TaskAdd;