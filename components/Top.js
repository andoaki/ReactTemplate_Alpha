import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Gamen1Actions from '../actions/Gamen1Actions'

class Top extends Component {
  constructor(props, context) {
    super(props, context);
    const actions = bindActionCreators(Gamen1Actions,this.props.dispatch);

    this.state = {
      actions: actions
    };
  }

  render() {
    return (
      <div>
        <div className="header">
          <h3>いらっしゃい</h3>
        </div>
        <div className="content">
          <p>
            トップ画面です。
          </p>
          <p>
            左のメニューから選んで下さい。
          </p>
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    top: state.top
  };
}

export default connect(select, null, null, { withRef: true })(Top);
