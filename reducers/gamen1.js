import { GAMEN1_ENTER_TEXT, GAMEN1_REGIST_ON_CLICK } from '../constants/ActionTypes';

const initialState = {
    todos : [
        {
            text: 'Use Redux',
            marked: false,
            id: 0
        }
    ],
    text: 'defaultValue',
    placeholder: '登録する内容を入力して下さい。',
    message: ''
};

export default function gamen1(state = initialState, action) {
  switch (action.type) {
  case GAMEN1_ENTER_TEXT:
    state.todos.text = action.text;
    return [{
      id: (state.todos.length === 0) ? 0 : state.todos[0].id + 1,
      marked: false,
      text: action.text
    }, ...state.todos];
  case GAMEN1_REGIST_ON_CLICK:
    if (state.text.length > 0) {
      var inputTodo = {
        id: (state.todos.length === 0) ? 0 : state.todos[state.todos.length - 1].id + 1,
        marked: false,
        text: state.text
      }
      state.todos.push(inputTodo);
      state.text = '';
      state.message = '';
    } else {
      state.message = '未入力です。';
    }
    return JSON.parse(JSON.stringify(state));

  default:
    return state;
  }
}
