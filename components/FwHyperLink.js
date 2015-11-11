import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

class FwHyperLink extends Component {
  render() {
    return (
      <Link to={this.props.href} className="pure-menu-heading">{this.props.text}</Link>
    );
  }
}

FwHyperLink.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string
};

export default FwHyperLink;