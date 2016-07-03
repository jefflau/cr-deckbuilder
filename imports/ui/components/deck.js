import React from 'react';
// import Card from 'card';

let deck = React.createClass({
  render() {
    let cardsInDeck = this.props.data;
    console.log(cardsInDeck);
    return (
      <div>{cardsInDeck}</div>
    );
  }
});

export default deck;