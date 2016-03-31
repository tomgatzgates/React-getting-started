import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Greeting from './greeting';
import Counter from './counter';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return 0;
  }
};

const store = createStore(counter);
ReactDOM.render(
  <span>
    <Greeting name="World" />
    <Counter
      value={store.getState()}
      onIncrement={
        () => {
          store.dispatch({ type: 'INCREMENT' });
          console.log('incre', store.getState());
        }
      }
      onDecrement={
        () => {
          store.dispatch({ type: 'DECREMENT' });
          console.log('decr', store.getState());
        }
      }
    />
  </span>,
  document.getElementById('app')
);
