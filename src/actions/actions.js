import {
  CHANGE_STYLE1,
  CHANGE_STYLE3,
  SAVE_ALBUM,
  CURRENT_INDEX,
  SET_VIEW,
  SET_HOME
} from "./actionTypes";

export const changeStyle1 = style1 => ({
  type: CHANGE_STYLE1,
  payload: { style1 }
});

export const changeStyle3 = style3 => ({
  type: CHANGE_STYLE3,
  payload: { style3 }
});

export const saveAlbum = album => ({
  type: SAVE_ALBUM,
  payload: { album }
});

export const saveIndex = index => ({
  type: CURRENT_INDEX,
  payload: { index }
});

export const setView = view => ({
  type: SET_VIEW,
  payload: { view }
});

export const setHome = home => ({
  type: SET_HOME,
  payload: { home }
});
