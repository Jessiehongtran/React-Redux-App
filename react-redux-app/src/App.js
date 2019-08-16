import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {Test} from './actions/index'

function App(props) {
  console.log('props in App', props)
  return (
    <div className="App">
      <h1> Let's build a cool app!!!</h1>
      
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state in mapStateToProps', state)
  return {
    test: state.test
  }
}

export default connect(
  mapStateToProps,
  {Test}
)(App);
