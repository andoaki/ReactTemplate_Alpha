import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

class FwButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
      placeholder: this.props.placeholder || ''
    };
  }

  handleOnClick(e) {
    this.props.onClick();
  }

  render() {
    return (
          <Button bsStyle='primary' placeholder={this.state.placeholder}
              onClick={this.handleOnClick.bind(this)}
              autoFocus='true'>{this.state.text}</Button>
    );
  }
}

FwButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string
};

export default FwButton;