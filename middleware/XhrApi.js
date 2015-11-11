import React, { PropTypes, Component } from 'react';
import superagent from 'superagent';

class XhrApi extends Component {
  getXhr(url) {
    return new Promise((resolve, reject) => {
        superagent
            .get(url)
            .end((error, res) => {
            	error ? reject(error) : resolve(res);
            });
    });
  }
}

export default XhrApi;
