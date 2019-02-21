import React from 'react';
import PropTypes from 'prop-types';
import styles from './character.css';

function Character({ character }) {
  const { name, status, species, gender, image } = character;
  return (
    <>
      <div className={styles.Character}>
        <li>
          <img src={image}/>
        </li>
        <li>Name: {name}</li>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Gender: {gender}</li>
      </div>
    </>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
