import Cards from '../imports/api/collections/cards';
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
    })
  }).catch(err => console.log(err))

}
