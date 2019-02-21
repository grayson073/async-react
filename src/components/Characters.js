import React, { Component } from 'react';
import Character from './Character';

const results = [
  {
    name: 'Frank',
    status: 'alive',
    species: 'dog',
    gender: 'male'
  },
  {
    name: 'Papi',
    status: 'alive',
    species: 'dog',
    gender: 'male'
  }
];

export default class Characters extends Component {

  state = {
    characters: []
  };
  
  componentDidMount() {
    this.setState({ characters: results });
  }
  
  render() {
    const listOfChars = this.state.characters.map(char => {
      return <Character character={char} key={char.name}/>;
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
