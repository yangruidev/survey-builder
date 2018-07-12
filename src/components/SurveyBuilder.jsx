//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/basic.scss';
import Home from './Pages/Home/Home.jsx';

import buildReducer from '../reducers/buildReducer';

const store = createStore(combineReducers({
  buildReducer
}), applyMiddleware(thunk));

const mapStateToProps = state => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //function list
  }
}

const SurveryBuilder = connect(mapStateToProps, mapDispatchToProps)(Home);

const root = document.getElementById('app');
let init = () => {
  alert("root element is missing");
};

if(root) {
  init = () => {
    ReactDOM.render(
      <Provider store={store}>
        <SurveryBuilder />
      </Provider>,
      root
    );  
  }
}

export default init;