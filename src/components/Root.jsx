//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/override-bootstrap.scss';
import '../styles/basic.scss';
import App from './Pages/App';
import buildReducer from '../reducers/buildReducer';

const store = createStore(
  combineReducers({
    buildReducer
  }),
  applyMiddleware(thunk)
);

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //function list
  };
};

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const root = document.getElementById('app');
let init = () => {
  alert('root element is missing');
};

if (root) {
  init = () => {
    ReactDOM.render(
      <Provider store={store}>
        <Root />
      </Provider>,
      root
    );
  };
}

export default init;
