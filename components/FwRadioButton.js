import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import FwLabel from '../components/FwLabel';

class FwRadioButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleOnClick(e) {
    if (e.target.value != undefined) {
      this.props.onClick(e.target);
    }
  }

  render() {
    var radios = JSON.parse(JSON.stringify(this.props.items));

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == this.props.value) {
          radios[i].className = 'btn btn-default active'
          radios[i].checked   = 'checked'
        } else {
          radios[i].className = 'btn btn-default'
          radios[i].checked   = ''
        }
        radios[i].id_label    = radios[i].id + '_label'
        radios[i].id_span     = radios[i].id + '_span'
    };

    return (
          <div className={classnames(this.props.className)}>
              {radios.map(radio =>
                <label key={radio.id_label} onClick={this.handleOnClick.bind(this)}>
                  <input type='radio' key={radio.id} id={radio.id} name={radio.name} checked={radio.checked}
                    value={radio.value} /> {radio.label}
                </label>
              )}
          </div>
    );
  }
}

FwRadioButton.propTypes = {
    onClick: PropTypes.func,
    items: PropTypes.array,
    value: PropTypes.string,
    className: PropTypes.string
};

export default FwRadioButton;