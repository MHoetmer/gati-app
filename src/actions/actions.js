import { CHANGE_STYLE1, CHANGE_STYLE3 } from "./actionTypes";

export const changeStyle1 = style1 => ({
  type: CHANGE_STYLE1,
  payload: { style1 }
});

export const changeStyle3 = style3 => ({
  type: CHANGE_STYLE3,
  payload: { style3 }
});
