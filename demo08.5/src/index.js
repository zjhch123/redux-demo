import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleWare = [
  thunk, createLogger()
]

const store = createStore(reducers, applyMiddleware(...middleWare))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
