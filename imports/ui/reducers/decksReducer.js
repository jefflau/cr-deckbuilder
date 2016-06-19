function decksReducer(state = [], action = {}) {
  switch (action.type) {
    case "SET_DECKS":
      return action.decks;
    default:
      return state;
  }
}

export default decksReducer;