import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'
import classnames from 'classnames';

class FwMenuListItem extends Component {
  constructor(props, context) {
    super(props, context);
    var defaultProps = { isExternal: false }

    this.state = {
      defaultProps: defaultProps
    };
  }

  render () {
    return (
      <li className="pure-menu-item">
        {this.renderLink()}
      </li>
    );
  }

  renderLink () {
    if (this.props.isExternal)
      return (
          <a href={this.props.link} target="_blank" className="pure-menu-link">
            <i className={this.props.icon}></i> {this.props.text}
          </a>
      )
    else
      return (
          <Link to={this.props.link} className="pure-menu-link">
            <i className={this.props.icon}></i> {this.props.text}
          </Link>
      )
  }
}

FwMenuListItem.propTypes = {
    icon: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default FwMenuListItem;
