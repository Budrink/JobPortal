import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { store } from './Reducer';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import App from './Components/LoginForm/App';
import App from './App';

const reducers = { form: formReducer };
const reducer = combineReducers(reducers);
let store = createStore(reducer);
// function store(reducer, initialState) {

//   };
//}

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root'),
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );
