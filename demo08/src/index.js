import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const middleWare = [
  thunk
]

if (process.env.NODE_ENV !== 'production') {
  middleWare.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleWare))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
