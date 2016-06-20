import Cards from './collections/cards';
import Decks from './collections/decks';

Meteor.publish('allCards', function() {
  return Cards.find({});
});

Meteor.publish('allDecks', function() {
  return Decks.find({});
});
