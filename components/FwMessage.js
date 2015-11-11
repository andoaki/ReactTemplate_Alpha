import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

class FwMessage extends Component {
  render() {
    if (this.props.message.length > 0) {
      return (
        <p>
          <Alert bsStyle="warning">{this.props.message}</Alert>
        </p>
      );
    } else{
      return  <p></p>
    }
  }
}

FwMessage.propTypes = {
    message: PropTypes.string
};

export default FwMessage;