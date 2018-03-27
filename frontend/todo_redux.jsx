import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", function(){
  window.store = configureStore;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root /> , document.getElementById('root'));
});
