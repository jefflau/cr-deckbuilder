import { combineReducers } from 'redux';
import todos from './todosReducer';
import cards from './cardsReducer';
import decks from './decksReducer';
import serverError from './serverErrorReducer';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  todos,
  cards,
  decks,
  serverError,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer;
