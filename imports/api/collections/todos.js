const Todos = new Mongo.Collection('todos');

if(Meteor.isServer){
  // require()...
  // server only requires here (import doesn't work inside if statement)
}

export function createTodo(text) {
  return Todos.insert({
    text
  })
}


export default Todos;
