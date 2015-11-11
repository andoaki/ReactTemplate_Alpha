import React, { PropTypes, Component } from 'react';
import XhrApi from '../middleware/XhrApi';

class Gamen2Logic1 extends Component {
  constructor(props, context) {
    super(props, context);
    const xhr = new XhrApi();
    this.state = {
      xhr: xhr
    };
  }

  getData(file) {
    return new Promise((resolve, reject) => {
      var url = 'http://localhost:3000/resources/json/' + file;
      this.state.xhr.getXhr(url)
      .then((obj) => {
        console.debug(obj);
        resolve(obj);
      }).catch((error) => {
        reject(error);
      });
    });
  }

}

export default Gamen2Logic1;
