import React from 'react';

let card = React.createClass({
  render: function () {
    let {cardInfo, i} = this.props;
    return (
      <li className="card" key={i}>
        <img src={cardInfo.image} />
        <div className="cardName">{cardInfo.name}</div>
      </li>
    )
  }
});

export default card;
