import Cards from '../imports/api/collections/cards';
import Decks from '../imports/api/collections/decks';
import { httpPromise } from '../imports/helpers/helperPromises';

if(Cards.find().count() === 0){
  //Get all cards
  let url = "http://www.clashapi.xyz/api/cards";

  httpPromise('GET', url, {}).then(res=>{
    res.data.forEach((card)=>{
      Cards.insert({
        ...card,
        image: `http://www.clashapi.xyz/images/cards/${card.idName}.png`
      });
    });
    return res.data;
  }).then((data)=>{
    console.log('finished loading api');
    if(Decks.find().count() < 1) {
      Decks.insert({
        "name": "Royal Giant OP",
        "cards": ['princess', "barbarians", "archers"],
        "averageElixirCost": 3.5
      });
    }
  }).catch(err => console.log(err))
}


