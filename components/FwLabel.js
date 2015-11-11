import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FwLabel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      className: this.props.className || '',
      text: this.props.text || ''
    };
  }

  render() {
    var forItem = (this.props.forItem != undefined) ? this.props.forItem : ''
    return (
      <label
      className={classnames(this.state.className)}
      htmlFor={forItem}>{this.state.text}</label>
    );
  }
}

FwLabel.propTypes = {
    text: PropTypes.string,
    forItem: PropTypes.string,
    className: PropTypes.string
};

export default FwLabel;