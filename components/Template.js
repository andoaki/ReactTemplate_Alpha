import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Gamen1Actions from '../actions/Gamen1Actions'

import Menu from './Menu'
import Footer from './Footer'

class Template extends Component {
  constructor(props, context) {
    super(props, context);
    const actions = bindActionCreators(Gamen1Actions,this.props.dispatch);

    this.state = {
      actions: actions,
      isMenuActive: true
    };
  }


  handleMenuClick (evt) {
    evt.preventDefault()
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  render() {
    const { isMenuActive } = this.state
    const activeClass = isMenuActive ? 'active' : ''

    return (
      <div id="layout" className={activeClass}>
        <div id="my_header"><h2>ヘッダー</h2></div>
        <div id="my_navigation">
          <a href="#menu" id="menuLink"
            className={classnames('menu-link', activeClass)}
            onClick={this.handleMenuClick.bind(this)}>
            <span></span>
          </a>

          <Menu activeClass={activeClass} />
        </div>

        <div id="my_contents">
          <div id="main">
            {this.props.children}
          </div>
        </div>

        <div id="my_footer">
          <Footer />
        </div>

      </div>
    )
  }
}

function select(state) {
  return {
    template: state.template
  };
}

export default connect(select, null, null, { withRef: true })(Template);
