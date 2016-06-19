import { applyMiddleware, createStore, compose } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import { Tracker } from 'meteor/tracker';

import Todos from './api/collections/todos';
import Cards from './api/collections/cards';
import Decks from './api/collections/decks';

//redux middleware
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import rootReducer from './ui/reducers/rootReducer';

const logger = createLogger();
const middleware = [reduxThunk, logger];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

Tracker.autorun(() => {
  store.dispatch({
    type: 'SET_TODOS',
    todos: Todos.find().fetch()
  });

  store.dispatch({
    type: 'SET_CARDS',
    cards: Cards.find().fetch()
  });

  store.dispatch({
    type: 'SET_DECKS',
    decks: Decks.find().fetch()
  });
});

export default store;

export const history = syncHistoryWithStore(browserHistory, store);
