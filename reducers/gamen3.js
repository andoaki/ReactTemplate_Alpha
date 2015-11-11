import { GAMEN2_ENTER_TEXT, GAMEN2_REGIST_ON_CLICK } from '../constants/ActionTypes';

const initialState = {
    todos : [
        {
            text: 'Use Redux',
            marked: false,
            id: 0
        }
    ],
    text: 'defaultValue',
    placeholder: '置換えてちょ'
};

export default function gamen3(state = initialState, action) {
  switch (action.type) {
  case GAMEN2_ENTER_TEXT:
    state.todos.text = action.text;
    return [{
      id: (state.todos.length === 0) ? 0 : state.todos[0].id + 1,
      marked: false,
      text: action.text
    }, ...state.todos];
  case GAMEN2_REGIST_ON_CLICK:
    var inputTodo = {
      id: (state.todos.length === 0) ? 0 : state.todos[state.todos.length - 1].id + 1,
      marked: false,
      text: state.text
    }
    state.todos.push(inputTodo);
    return JSON.parse(JSON.stringify(state));

  default:
    return state;
  }
}
