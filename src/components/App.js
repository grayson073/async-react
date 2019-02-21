import React, { Component } from 'react';
import Characters from './Characters';
import Header from './Header';

export default class App extends Component {

  state = {
    currentPage: 1
  };

  increment = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  decrement = () => {
    const { currentPage } = this.state;
    if(currentPage === 1) return;
    this.setState({ currentPage: currentPage - 1 });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <Header
          currentPage={currentPage}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Characters/>
      </div>
    );
  }
}
