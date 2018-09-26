import * as actionTypes from "./action";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === actionTypes.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === actionTypes.ADD) {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  if (action.type === actionTypes.SUBSTRACT) {
    return {
      ...state,
      counter: state.counter - action.value
    };
  }
  return state;
};

export default counterReducer;
