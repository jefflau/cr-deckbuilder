import Cards from '../imports/collections/cards';
import { httpPromise } from '../imports/helpers/helperPromises';

console.log('fixtures')

if(Cards.find().count() === 0){
  console.log('here1')
  //go get cards from API
  let url = "http://www.clashapi.xyz/api/cards";
  let options = {

  };
  let cardsPromise = httpPromise('GET', url, options);

  cardsPromise.then(res=>{
    res.data.forEach((card)=>{
      Cards.insert(card);
    })
  }).catch(err => console.log(err))

}
