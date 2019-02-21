import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { increment, decrement, currentPage } = props;
  return (
    <div>
      <p>Current page: {currentPage}</p>
      <button disabled={currentPage === 1 ? true : false } onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

Header.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Header;

