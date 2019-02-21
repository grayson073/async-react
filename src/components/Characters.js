import React, { Component } from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
// import characterData from '../data/characterData';
import { getRickAndMortyCharacters } from '../services/rickAndMortyApi';

// Results commented out if using live API call


export default class Characters extends Component {

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
  };

  state = {
    characters: []
  };
  
  componentDidMount() {
    /* Used for live API call and pagination: */
    getRickAndMortyCharacters(this.props.currentPage)
      .then(chars => {
        this.setState({ characters: chars.results });
      });

    /* Used for hard-coded "characterData" from above: */
    // this.setState({ characters: characterData });
  }

  componentDidUpdate() {
    // Used for live API call and pagination:
    getRickAndMortyCharacters(this.props.currentPage)
      .then(chars => {
        this.setState({ characters: chars.results });
      });
  }
  
  render() {
    const listOfChars = this.state.characters.map(char => {
      return <Character character={char} key={char.id}/>;
    });

    return (
      <table>
        <tbody>
          {listOfChars}
        </tbody>
      </table>
    );
  }
}
