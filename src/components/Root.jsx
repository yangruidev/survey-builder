//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/override-bootstrap.scss';
import '../styles/basic.scss';
import App from './Pages/App';
import buildReducer from '../reducers/buildReducer';
import multipleReducer from './Lib/optionBuilders/multipleChoice/multipleReducer';

const store = createStore(
  combineReducers({
    buildReducer,
    multipleReducer
  }),
  applyMiddleware(thunk)
);

const app = document.getElementById('app');
let init = () => {
  alert('root element is missing');
};

if (app) {
  init = () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      app
    );
  };
}

export default init;
