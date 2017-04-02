const selectedAircraft = (state = 'SELECT_NONE', action) => {
  switch (action.type) {
    case 'SET_SELECTED_AIRCRAFT':
      return action.tail
    default:
      return state
  }
}

export default selectedAircraft
