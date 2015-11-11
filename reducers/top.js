import { GAMEN2_ENTER_TEXT, GAMEN2_REGIST_ON_CLICK } from '../constants/ActionTypes';

const initialState = {
    text: 'defaultValue'
};

export default function top(state = initialState, action) {
  switch (action.type) {
  case GAMEN2_ENTER_TEXT:
    return state;
  case GAMEN2_REGIST_ON_CLICK:
    return state;
  default:
    return state;
  }
}
