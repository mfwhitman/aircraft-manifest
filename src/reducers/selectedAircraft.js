const selectedAircraft = (state = '', action) => {
  switch (action.type) {
    case 'SET_SELECTED_AIRCRAFT':
      return action.tail
    default:
      return state
  }
}

export default selectedAircraft
