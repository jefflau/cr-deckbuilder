import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import Deck from '../deck';
import Card from '../card';
import CardLibrary from '../cardLibrary';

import SubscribeComponent from '../helpers/SubscribeComponent';;
import  { createDeck } from '../../actions/actions';

class Home extends Component {
  componentWillMount() {
    this.props.subscribe('allTodos');
    this.props.subscribe('allCards');
    this.props.subscribe('allDecks');
  }
  render(){
    let { form, submitHandler, serverError, todos, cards, decks } = this.props;
    let remainingCards;
    let cardsInDeck = decks.map((deck, i )=> {
      let deckCards = deck.cards.map((name, i)=> {
        let cardObj = cards.filter((card, i )=> name === card.idName);
        let cardInfo = cardObj[0];
        return (
          <Card cardInfo={cardInfo} i={i}/>
        )
      });
      remainingCards = cards.filter((card, i) => {
        let array = deck.cards.filter((name, i)=> {
          return name === card.idName
        })
        return array.length === 0
      })
      return (
        <ul className= "currentDeck" key={i}> {deckCards}</ul>
      )
    });

    return (
      <div className="home">
        <div className="notifier">
          {serverError.error ? <div className="server-error">{serverError.error.reason}</div> : "" }
        </div>
        <div>{cardsInDeck}</div>
        <CardLibrary cards={remainingCards}/>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    serverError: state.serverError,
    cards: state.cards,
    decks: state.decks,
    form: state.form.addTodoForm
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitHandler: (form) => {
      console.log(form)
      dispatch(createTodo(form.text.value.toLowerCase()))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeComponent(Home));
