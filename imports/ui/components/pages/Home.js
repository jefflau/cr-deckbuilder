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

    let currentDeckIndex = 0, //make dynamic later
        currentDeck = null,
        remainingCards = [];

    if(cards.length > 0 && decks.length > 0){
      currentDeck = decks[currentDeckIndex].cards.map((name, index)=> {
        let cardObj = cards.filter((card, i )=> name === card.idName);
        let cardInfo = cardObj[0];
        return (
          <Card cardInfo={cardInfo} key={cardInfo.idName}/>
        )
      });

      remainingCards = cards.filter((card) => {
        let array = decks[currentDeckIndex].cards.filter((name)=> {
          return name === card.idName
        })
        return array.length === 0
      })
    }

    return (
      <div className="home">
        <div className="notifier">
          {serverError.error ? <div className="server-error">{serverError.error.reason}</div> : "" }
        </div>
        <ul className= "currentDeck">
          {currentDeck}
        </ul>
        <h2>Remaining Cards</h2>
        {<CardLibrary cards={remainingCards}/>}
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
