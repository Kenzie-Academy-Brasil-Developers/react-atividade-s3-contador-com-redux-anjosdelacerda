import { plus, less } from "./actionsTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case plus:
      return state + action.payload;
    case less:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
