import { callMethodPromise } from '../../helpers/helperPromises';

import { Meteor } from 'meteor/meteor';

export function createTodo(text){
  return dispatch => {
    callMethodPromise('addTodo', text)
      .then(data=>console.log(data))
      .catch(error=>{
        dispatch({
          type: 'SERVER_ERROR',
          error,
        });
      });
  };
};
