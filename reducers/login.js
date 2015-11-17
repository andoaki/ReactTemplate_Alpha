import { LOGIN_LOGIN_ON_CLICK } from '../constants/ActionTypes';

const initialState = {
    loginid: '',
    password: '',
    confirm: '',
    message: ''
};

export default function login(state = initialState, action) {
  switch (action.type) {
  case LOGIN_LOGIN_ON_CLICK:
    console.log(action.loginInfo);
    if ((action.loginInfo.loginid == action.loginInfo.password) && (action.loginInfo.loginid != '')) {
      state.loginid = action.loginInfo.loginid;
      state.password = action.loginInfo.password;
      state.confirm = '1';
      state.message = '';
    } else {
      state.confirm = '0';
      state.message = '認証でエラーになりました。';
    }
    return JSON.parse(JSON.stringify(state));
  default:
    return state;
  }
}
