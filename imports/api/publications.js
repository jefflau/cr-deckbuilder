import Todos from './collections/todos';
import Cards from './collections/cards';
import Decks from './collections/decks';

Meteor.publish('allTodos', function() {
  return Todos.find({});
});

Meteor.publish('allCards', function() {
  return Cards.find({});
});

Meteor.publish('allDecks', function() {
  return Decks.find({});
});
