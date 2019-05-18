import {
  CHANGE_STYLE1,
  CHANGE_STYLE3,
  SAVE_ALBUM,
  CURRENT_INDEX,
  SET_VIEW,
  SET_HOME
} from "../actions/actionTypes";

const initialState = {
  style1: true,
  style3: false,
  home: true,
  album: [],
  view: 2
};

const rootReducer = (state = initialState, action) => {
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
    case SAVE_ALBUM:
      const { album } = action.payload;

      return {
        ...state,
        album: album
      };
    case CURRENT_INDEX:
      const { index } = action.payload;

      return {
        ...state,
        index: index
      };
    case SET_HOME:
      const { home } = action.payload;

      return {
        ...state,
        home: home
      };
    case SET_VIEW:
      const { view } = action.payload;
      return {
        ...state,
        view: view
      };
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default rootReducer;
