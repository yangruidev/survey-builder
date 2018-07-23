//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/override-bootstrap.scss';
import './styles/basic.scss';
import App from './Pages/App';
import buildReducer from './SurverEditor/buildReducer';
import optionsReducer from './SurverEditor/optionBuilders/optionsReducer';

const store = createStore(
  combineReducers({
    buildReducer,
    optionsReducer
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
