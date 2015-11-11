import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Gamen1Actions from '../actions/Gamen1Actions';
import FwInputText from './FwInputText';
import FwButton from '../components/FwButton';
import Gamen1List1 from '../components/Gamen1List1';
import FwLabel from '../components/FwLabel';
import FwHyperLink from '../components/FwHyperLink';
import FwMessage from '../components/FwMessage';

import Menu from './Menu'
import Footer from './Footer'

class Gamen1 extends Component {
  constructor(props, context) {
    super(props, context);
    const actions = bindActionCreators(Gamen1Actions,this.props.dispatch);

    this.state = {
      placeholder: this.props.gamen1.placeholder,
      text: this.props.gamen1.text,
      actions: actions,
      isMenuActive: true
    };
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.gamen1.text = text;
    }
  }

  handleRegist() {
    this.state.actions.registOnClick();
    if (this.props.gamen1.message.length == 0) {
      this.refs.inputText1.state.text = '';
    }
  }

  render() {
    const activeClass = this.state.isMenuActive ? 'active' : ''

    return (
      <div>
          <h3>登録画面</h3>
          <p>
            <FwInputText
              onSave={this.handleSave.bind(this)}
              text={this.props.gamen1.text}
              placeholder={this.state.placeholder}
              className='col-sm-3'
              ref='inputText1'/>
            <FwLabel text={'　'} for={''} />
            <FwButton text={'登録'} placeholder={'登録できます'} onClick={this.handleRegist.bind(this)} />
            <FwLabel text={'　　　　'} for={''} />
            <FwHyperLink href={'/top'} text={'トップ画面へ遷移します。'} />
          </p>
          <Gamen1List1 key={'list' + this.props.gamen1.todos.length} todos={this.props.gamen1.todos} />
          <FwMessage message={this.props.gamen1.message} />
      </div>
    );
  }
}

function select(state) {
  return {
    gamen1: state.gamen1
  };
}

export default connect(select, null, null, { withRef: true })(Gamen1);
