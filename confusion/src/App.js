import React, { Component } from 'react';
import Main from './components/MainComponent';
import {Provider} from 'react-redux';
import {configureStore} from './redux/ConfigureStore';

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

const store = configureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;
