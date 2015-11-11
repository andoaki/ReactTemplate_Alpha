import * as types from '../constants/ActionTypes';

export function selectOnChange(obj) {
  return {
    type: types.GAMEN2_SELECT_ON_CHANGE,
    obj
  };
}

export function searchOnClick(obj) {
  return {
    type: types.GAMEN2_SEARCH_ON_CLICK,
    obj
  };
}
