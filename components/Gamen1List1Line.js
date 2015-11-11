import React, { PropTypes, Component } from 'react';
import FwLabel from './FwLabel';
import { ListGroupItem } from 'react-bootstrap';

class Gamen1List1Line extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ListGroupItem>
        <FwLabel key={this.props.line.id} text={this.props.line.text} forItem={this.props.line.text} /><br></br>
      </ListGroupItem>
    );
  }
}

Gamen1List1Line.propTypes = {
    line: PropTypes.object
};

export default Gamen1List1Line;