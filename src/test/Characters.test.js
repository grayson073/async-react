import React from 'react';
import renderer from 'react-test-renderer';
import Characters from '../components/Characters';

describe('Characters', () => {
  
  it('Renders correctly', () => {
    const characters = [
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

    const tree = renderer.create(
      <Characters characters={characters}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
