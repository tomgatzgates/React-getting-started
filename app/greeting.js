import React, { PropTypes } from 'react';

const Greeting = ({ name }) => (
  <h1>hello {name}</h1>
);

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Greeting as default };
