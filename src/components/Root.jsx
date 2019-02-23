//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import '../styles/site.scss';
import App from './Pages/App';
import buildReducer from './SurveyEditor/reducers/buildReducer';
import viewReducer from './SurveyEditor/reducers/viewReducer';

const store = createStore(
  combineReducers({
    buildReducer,
    viewReducer
    //more reducers...
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
