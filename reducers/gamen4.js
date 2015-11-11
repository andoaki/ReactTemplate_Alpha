import { GAMEN4_DROPDOWN1_ON_CHANGE, GAMEN4_DROPDOWN2_ON_CHANGE, GAMEN4_DROPDOWN3_ON_CHANGE, GAMEN4_DROPDOWN4_ON_CHANGE,
 GAMEN4_CUSTOMER_KEITAI_RADIOS_ON_CLICK, GAMEN4_DIALOG1_OPEN, GAMEN4_DIALOG1_CLOSE } from '../constants/ActionTypes';

const initialState = {
    inputText1: 'あ',
    inputText2: 'い',
    inputText3: 'う',
    inputText4: 'え',
    dropDown1: '1',
    dropDown2: '2',
    dropDown3: '2',
    dropDown4: '1',
    address: '〒170-0014東京都豊島区池袋１丁目',
    banchigo: '6-8',
    buildingKana: 'ﾀﾃﾓﾉｶﾅ',
    muneban: '1',
    heyaban: '205',
    buildingKanji: '建物漢字',
    customer_keitai_radios: '4',
    gameArgs1: '親画面の値',
    gamenReturn1: '',
    showModal: false,
    dialogArgs1: '',
    dialogReturn1: '子画面の値',
    message: ''
};

export default function gamen4(state = initialState, action) {
  switch (action.type) {
  case GAMEN4_DROPDOWN1_ON_CHANGE:
      state.dropDown1 = action.obj;
      return JSON.parse(JSON.stringify(state));
  case GAMEN4_DROPDOWN2_ON_CHANGE:
      state.dropDown2 = action.obj;
      return JSON.parse(JSON.stringify(state));
  case GAMEN4_DROPDOWN3_ON_CHANGE:
      state.dropDown3 = action.obj;
     return JSON.parse(JSON.stringify(state));
  case GAMEN4_DROPDOWN4_ON_CHANGE:
      state.dropDown4 = action.obj;
      return JSON.parse(JSON.stringify(state));
  case GAMEN4_CUSTOMER_KEITAI_RADIOS_ON_CLICK:
      console.log('customer_keitai_radios=' + action.obj.value);
      state.customer_keitai_radios = action.obj.value;
      return JSON.parse(JSON.stringify(state));
  case GAMEN4_DIALOG1_OPEN:
      state.showModal = true;
      return JSON.parse(JSON.stringify(state));
  case GAMEN4_DIALOG1_CLOSE:
      state.showModal = false;
      return JSON.parse(JSON.stringify(state));

  default:
    return state;
  }
}
