import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Houses from './components/Houses'
import Loader from 'react-loader-spinner'

function App(props) {
  console.log('props in App', props)
  return (
    <div className="App">
      <h1>Welcome to Ice and Fire world!</h1>
      {props.isLoading ?  
        <Loader 
          type="Oval"
          color="gray"
          height="30"
          width="30" /> : 
        <button>
          Discover Houses
        </button>}

      <Houses houses = {props.houses}/>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state in mapStateToProps', state)
  return {
    isLoading: state.isLoading,
    houses: state.houses
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);
