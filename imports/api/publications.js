import Todos from './collections/todos';
import Cards from './collections/cards';

Meteor.publish('allTodos', function() {
  return Todos.find({});
});

Meteor.publish('allCards', function() {
  return Cards.find({});
});
