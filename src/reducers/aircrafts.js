const aircraft = (state, action) => {
  switch (action.type) {
    case 'ADD_AIRCRAFT':
      return {
        id: action.id,
        tail: action.text,
        name: action.name,
        isSelected: false,
        isFetching: false,
        didInvalidate: false
      }
    case 'ADD_AIRCRAFT_DETAILS':
      return {
        ...state,
        details: details(state[action.tail], action)
      }  
    default:
      return state
  }
}

const details = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AIRCRAFT_DETAILS':
      return {
        image: action.image,
        passengers: action.passengers,
        class: action.class,
        year: action.year
      }
    default:
      return state  
  }
}

const aircrafts = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_AIRCRAFT':
      return {
        ...state,
        [action.tail]: aircraft(undefined, action)
      }
    case 'ADD_AIRCRAFT_DETAILS':
      return {
        ...state,
        [action.tail]: aircraft(undefined, action)
      }
    default:
      return state
  }
}

export default aircrafts
