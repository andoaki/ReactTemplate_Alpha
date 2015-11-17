import React, { PropTypes, Component } from 'react';
import mixin from 'es6-react-mixins';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Link, History } from 'react-router';
import { Panel, Alert } from 'react-bootstrap';

import * as LoginActions from '../actions/LoginActions';
import FwInputText from './FwInputText';
import FwButton from '../components/FwButton';
import FwLabel from '../components/FwLabel';
import FwMessage from '../components/FwMessage';

class Login extends mixin(History) {
  constructor(props, context) {
    super(props, context);
    const actions = bindActionCreators(LoginActions, this.props.dispatch);

    this.state = {
      actions: actions
    };
  }

  handleLoginidSave(text) {
    this.props.login.loginid = text;
  }

  handlePasswordSave(text) {
    this.props.login.password = text;
  }

  handleLogin() {
    const loginInfo = {
      loginid: this.props.login.loginid,
      password: this.props.login.password
    }
    this.state.actions.loginOnClick(loginInfo);

    if (this.props.login.confirm == '1') {
      this.history.pushState(null, '/top', '');
    }

  }

  render() {
    const loginidError = this.props.login.message.length > 0 ? true : false;
    const passwordError = this.props.login.message.length > 0 ? true : false;

    return (
      <Panel>
        <p>
          <FwLabel text={'ログインID：'} for={''} />
          <FwInputText onSave={this.handleLoginidSave.bind(this)}
                       text={this.props.login.loginid}
                       placeholder='ログインIDを入力'
                       error={loginidError}
                       ref='inputTextLoginid'/>
        </p>
        <p>
          <FwLabel text={'パスワード：'} for={''} />
          <FwInputText onSave={this.handlePasswordSave.bind(this)}
                       text={this.props.login.password}
                       placeholder='パスワードを入力'
                       error={passwordError}
                       ref='inputTextPassword'/>
        </p>
        <p>
          <FwButton text={'ログイン'} placeholder={'ログインします'} onClick={this.handleLogin.bind(this)} />
        </p>
        <FwMessage message={this.props.login.message} />
      </Panel>
    );
  }

}

function select(state) {
  return {
    login: state.login
  };
}

export default connect(select, null, null, { withRef: true })(Login);
