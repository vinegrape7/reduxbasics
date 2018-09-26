import * as actionTypes from "./action";

const initialState = {
  results: []
};

// Reducer
const resultsReducer = (state = initialState, action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    console.log(state);
    return {
      ...state,
      results: state.results.concat({
        id: new Date(),
        value: action.result
      })
    };
  }
  if (action.type === actionTypes.DELETE_STORE_RESULT) {
    const filteredResults = state.results.filter(d => d.id !== action.id);
    return {
      ...state,
      results: filteredResults
    };
  }
  return state;
};

export default resultsReducer;
