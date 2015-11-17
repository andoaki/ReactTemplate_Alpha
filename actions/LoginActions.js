import * as types from '../constants/ActionTypes';

export function loginOnClick(loginInfo) {
  return {
    type: types.LOGIN_LOGIN_ON_CLICK,
    loginInfo
  };
}
