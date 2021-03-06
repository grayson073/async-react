import React, { Component } from 'react';
import Characters from './Characters';
import Header from './Header';
import styles from './app.css';

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
      <div className={styles.App}>
        <Header
          currentPage={currentPage}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Characters
          currentPage={currentPage}
        />
      </div>
    );
  }
}
