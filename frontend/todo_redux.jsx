import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import App from './components/app';
import rootReducer from './reducers/root_reducer';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';


document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/> , rootEl);
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // ReactDOM.render(<App /> , document.getElementById('temp'));
});
