import React, { PropTypes, Component } from 'react';
import Gamen1List1Line from './Gamen1List1Line';
import { ListGroup } from 'react-bootstrap';

const initialState = [{
  text: 'Use Redux',
  marked: false,
  id: 0
}];

class Gamen1List1 extends Component {
  constructor(props, context) {
    super(props, context);
    if (this.props.todos == null) {
      this.props.todos = [];
    }
  }

  render() {
    console.log("Gamen1List1");
    return (
      <ListGroup>
          {this.props.todos.map(todo =>
              <Gamen1List1Line key={todo.id} line={todo} />
          )}
      </ListGroup>
    );
  }
}

Gamen1List1.propTypes = {
    todos: PropTypes.array
};

export default Gamen1List1;