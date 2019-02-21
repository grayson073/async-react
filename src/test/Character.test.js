import React from 'react';
import renderer from 'react-test-renderer';
import Character from '../components/Character';

describe('Character', () => {
  
  it('Renders correctly', () => {
    const character = {
      name: 'Frank',
      status: 'alive',
      species: 'dog',
      gender: 'male'
    };

    const tree = renderer.create(
      <Character character={character}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
