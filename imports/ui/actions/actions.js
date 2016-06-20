import { callMethodPromise } from '../../helpers/helperPromises';
import { Meteor } from 'meteor/meteor';

export function createDeck(text){
  return dispatch => {
    callMethodPromise('createDeck', text)
      .then(data=>console.log(data))
      .catch(error=>{
        dispatch({
          type: 'SERVER_ERROR',
          error,
        });
      });
  };
};
