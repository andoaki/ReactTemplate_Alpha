import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FwInputText extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
      placeholder: this.props.placeholder || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newMode) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newMode) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    var activeClass = (this.props.className != '') ? this.props.className : ''
    if (this.props.editing) {
      activeClass = activeClass + ' edit'
    }
    if (this.props.newMode) {
      activeClass = activeClass + ' new-mode'
    }
    if (this.props.error) {
      activeClass = activeClass + ' bg-danger'
    }

    return (
      <input className={classnames(activeClass)}
             type='text'
             placeholder={this.state.placeholder}
             autoFocus='true'
             value={this.state.text}
             onBlur={this.handleBlur.bind(this)}
             onChange={this.handleChange.bind(this)}
             onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

FwInputText.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.bool,
    editing: PropTypes.bool,
    newMode: PropTypes.bool
};

export default FwInputText;