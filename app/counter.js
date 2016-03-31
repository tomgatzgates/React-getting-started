import React, { PropTypes } from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className="counter">
    <h2>{ value }</h2>
    <button onClick={ onIncrement }>+</button>
    <button onClick={ onDecrement }>-</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export { Counter as default };
