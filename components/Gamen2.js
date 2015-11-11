import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Gamen2Actions from '../actions/Gamen2Actions';
import FwInputText from './FwInputText';
import FwLabel from '../components/FwLabel';
import FwButton from '../components/FwButton';
import FwDropDown from '../components/FwDropDown';

import Gamen2List1 from '../components/Gamen2List1';
import Gamen2Logic1 from '../app/Gamen2Logic1';
import XhrApi from '../middleware/XhrApi';

class Gamen2 extends Component {
  constructor(props, context) {
    super(props, context);
    const actions = bindActionCreators(Gamen2Actions,this.props.dispatch);
    var logic1 = new Gamen2Logic1();
    this.state = {
      actions: actions,
      logic1: logic1
    };
  }

  handleText1(text) {
    if (text.length !== 0) {
      this.props.gamen2.search_text = text;
    }
  }

  handleSearch() {
    this.state.logic1.getData(this.props.gamen2.search_text)
    .then((obj) => {
      console.debug(obj);
      this.state.actions.searchOnClick(obj);
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    console.log('Gamen2:' + JSON.stringify(this.props.gamen2.employees));
    const serach_items = [
        { eventKey: 'employees.json',    text: 'employees.json'  },
        { eventKey: 'employees1.json',   text: 'employees1.json' },
        { eventKey: 'employees2.json',   text: 'employees2.json' }
    ];


    return (
      <div>
          <h3>サーバーアクセス画面</h3>
          <p></p>
          <FwLabel text={'ドロップダウンボタンを選択するとサーバーからデータを取得します。'} for={''} />
          <p></p>
          <FwDropDown id='dropDown1' title={this.props.gamen2.search_text} items={serach_items} onSelect={this.handleSelect.bind(this)} ref='dropDown1'/>
          <p></p>
          <Gamen2List1 key={'list' + this.props.gamen2.employees.length} employees={this.props.gamen2.employees} />
      </div>
    );
  }
}

function select(state) {
  return {
    gamen2: state.gamen2
  };
}

export default connect(select, null, null, { withRef: true })(Gamen2);
