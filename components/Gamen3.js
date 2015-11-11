import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Gamen1Actions from '../actions/Gamen1Actions';
import FwLabel from '../components/FwLabel';
import FwHyperLink from '../components/FwHyperLink';

class Gamen3 extends Component {
  constructor(props, context) {
    super(props, context);
    const actions = bindActionCreators(Gamen1Actions,this.props.dispatch);

    this.state = {
      actions: actions,
      blush: false,
      ctx: null,
      mouseX: 0,
      mouseY: 0,
      x: 0,
      y: 0,
      offsetX: -150,
      offsetY: -80
    };
  }

  componentDidMount() {
    var canvas = document.getElementById('my_canvas');
    var ctx = canvas.getContext('2d');
    this.state.ctx = ctx;
    canvas.addEventListener('mousemove', this.handleMousemove.bind(this));
    canvas.addEventListener('mousedown', this.handleMousedown.bind(this));
    canvas.addEventListener('mouseup', this.handleMouseup.bind(this));
  }

  componentWillUnmount() {
    var canvas = document.getElementById('my_canvas');
    canvas.removeEventListener('mousemove', this.handleMousemove);
    canvas.removeEventListener('mousedown', this.handleMousedown);
    canvas.removeEventListener('mouseup', this.handleMouseup);
  }

  handleMousemove(event) {
    this.state.mouseX = event.pageX;
    this.state.mouseY = event.pageY;
    if (this.state.blush) {
        this.state.ctx.beginPath();
        this.state.ctx.moveTo(this.state.x + this.state.offsetX, this.state.y + this.state.offsetY);
        this.state.ctx.lineTo(this.state.mouseX + this.state.offsetX, this.state.mouseY + this.state.offsetY);
        this.state.ctx.stroke();
    }
    this.state.x = this.state.mouseX;
    this.state.y = this.state.mouseY;
  }

  handleMousedown(event) {
    this.state.blush = true;
  }

  handleMouseup(event) {
    this.state.blush = false;
  }

  render() {
    return (
      <div>
          <h3>お絵かき画面</h3>
          <canvas id="my_canvas" width="300" height="200"></canvas>
      </div>
    );
  }
}

function select(state) {
  return {
    gamen3: state.gamen3
  };
}

export default connect(select, null, null, { withRef: true })(Gamen3);
