import React from 'react';

let card = React.createClass({
  render: function () {
    let {cardInfo} = this.props;
    return (
      <li className="card">
        <img src={cardInfo.image} />
        <div className="cardName">{cardInfo.name}</div>
      </li>
    )
  }
});

export default card;
