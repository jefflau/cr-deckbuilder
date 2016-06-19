import Todos from './collections/todos';

Meteor.publish('allTodos', function() {
  return Todos.find({});
});
