import * as types from '../constants/ActionTypes';

export function enterText(text) {
  return {
    type: types.GAMEN1_ENTER_TEXT,
    text
  };
}

export function registOnClick() {
  return {
    type: types.GAMEN1_REGIST_ON_CLICK
  };
}
