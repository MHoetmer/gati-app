import { CHANGE_STYLE1, CHANGE_STYLE3 } from "../actions/actionTypes";

const initialState = {
  style1: false
};

const changeStyle1 = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STYLE1:
      const { style1 } = action.payload;

      return {
        ...state,
        style1: style1
      };
    case CHANGE_STYLE3:
      const { style3 } = action.payload;

      return {
        ...state,
        style3: style3
      };
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default changeStyle1;
