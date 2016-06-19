import Todos, { createTodo } from './collections/todos';

Meteor.methods({
  addTodo(text){
    if (this.isSimulation) {
      //server only method returns out on client
      return false;
    }
    if (!text){
      throw new Meteor.Error('text missing', 'Cannot submit an empty message');
    }

    return createTodo(text);
  }
});
