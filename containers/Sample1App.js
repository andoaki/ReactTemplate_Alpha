import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Router, Route, Link } from 'react-router';
import Template from '../components/Template';
import Login from '../components/Login';
import Top from '../components/Top';
import Gamen1 from '../components/Gamen1';
import Gamen2 from '../components/Gamen2';
import Gamen3 from '../components/Gamen3';
import Gamen4 from '../components/Gamen4';

const store = configureStore();

class Sample1App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={this.props.history}>
            <Route path='/' component={Login}/>
            <Route component={Template}>
              <Route path='/top' component={Top}/>
              <Route path='/gamen1' component={Gamen1}/>
              <Route path='/gamen2' component={Gamen2}/>
              <Route path='/gamen3' component={Gamen3}/>
              <Route path='/gamen4' component={Gamen4}/>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Sample1App;
