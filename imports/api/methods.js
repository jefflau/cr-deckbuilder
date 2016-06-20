import Decks, { insertDeck } from './collections/decks';

Meteor.methods({
  createDeck(deck, userId){
    if (this.isSimulation) {
      //server only method returns out on client
      return false;
    }
    if (!text){
      throw new Meteor.Error('text missing', 'Cannot submit an empty message');
    }

    return insertDeck(deck, userId);
  }
});
