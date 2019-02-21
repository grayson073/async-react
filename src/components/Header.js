import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';

function Header(props) {
  const { increment, decrement, currentPage } = props;
  return (
    <div className={styles.Header}>
      <button disabled={currentPage === 1 ? true : false } onClick={decrement}>Decrement</button>
      <p>Page: {currentPage}</p>
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

