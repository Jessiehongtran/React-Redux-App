import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Houses from './components/Houses'
import Loader from 'react-loader-spinner'
import {getData} from './actions'

function App(props) {
  console.log('props in App', props)
  return (
    <div className="App">
      <h1>Welcome to GAME OF THRONE houses discovery!</h1>
      <button onClick={props.getData}> 
        {props.isLoading ?
          <Loader 
            type="Oval"
            color="gray"
            height="30"
            width="30" /> : 
          'Discover Houses'
        }
      </button> 

      <Houses houses = {props.houses}/>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state in mapStateToProps', state)
  return {
    isLoading: state.isLoading,
    houses: state.houses,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {getData}
)(App);
