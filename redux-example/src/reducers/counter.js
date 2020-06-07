import * as types from "../actions/ActionTypes";

const initialState = {
  number: 0,
};

export default function counter(state = initialState, action) {
  // state가 undefined일때는 initialState를 사용하게 하는 ES6문법
  // if (typeof state === 'undefined') {
  //     return initialState;
  // }

  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }

  // return state;
}
