import React, { Component, PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import classnames from 'classnames';

class FwDropDown extends Component {
  constructor(props, context) {
    super(props, context);
    if (this.props.items == null) {
      this.props.items = [];
    }
    this.state = {
      value: this.props.value || ''
    };
  }

  handleOnSelect(event) {
    if ( this.props.onSelect ) {
      console.log('handleOnSelect=' + event.target.text);
      var eventKey = "";
      for (var i = 0; i < this.props.items.length; i++) {
        if (this.props.items[i].text === event.target.text) {
          eventKey = this.props.items[i].eventKey;
        }
      }
      console.log('handleOnSelect=' + eventKey);
      this.props.onSelect(eventKey);
      this.state.value = eventKey;
    }
  }

  render() {
    var value = "";
    for (var i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].eventKey === this.state.value) {
        value = this.props.items[i].text;
      }
    }

    return (
          <div className={classnames(this.props.className)}>
            <DropdownButton id={this.state.value} title={value} bsSize='sm' bsStyle='primary'
              onSelect={this.handleOnSelect.bind(this)}>
              {this.props.items.map(item =>
                <MenuItem key={this.state.value + item.text} eventKey={item.eventKey}>{item.text}</MenuItem>
              )}
            </DropdownButton>
          </div>
    );
  }
}

FwDropDown.propTypes = {
    onSelect: PropTypes.func,
    id: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    items: PropTypes.array
};

export default FwDropDown;