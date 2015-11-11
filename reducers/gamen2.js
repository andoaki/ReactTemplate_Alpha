import { GAMEN2_SEARCH_ON_CLICK, GAMEN2_SELECT_ON_CHANGE } from '../constants/ActionTypes';

const initialState = {
    employees : [{}],
    search_text: 'ファイル選択'
};

const initialState_sample = {
    employees : [
        {
            id: '1',
            firstName: 'super',
            lastName: 'agent',
            age: '3'
        }
    ],
    search_text: 'ファイル選択',
    optionState: ''
};

export default function gamen2(state = initialState, action) {

  switch (action.type) {
  case GAMEN2_SEARCH_ON_CLICK:
    console.log('GAMEN2_SEARCH_ON_CLICK before:' + JSON.stringify(state.employees));
    state.employees = action.obj.body.employees;
    console.log('GAMEN2_SEARCH_ON_CLICK after:' + JSON.stringify(state.employees));
    return JSON.parse(JSON.stringify(state));
  case GAMEN2_SELECT_ON_CHANGE:
    console.log('GAMEN2_SELECT_ON_CHANGE before:' + JSON.stringify(state.employees));
    state.employees = action.obj.body.employees;
    console.log('GAMEN2_SELECT_ON_CHANGE after:' + JSON.stringify(state.employees));
    return JSON.parse(JSON.stringify(state));
  default:
    return state;
  }
}
