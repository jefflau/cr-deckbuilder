import React from 'react';
import Card from './card';

let CardLibrary = function ({cards}){
  let displayCards = cards.map((card, i )=> {
    return <Card cardInfo={card} i={i} />
  })
  return (
    <ul className="cards">
      {displayCards}
    </ul>
  )
}

export default CardLibrary
