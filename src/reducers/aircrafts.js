import {
  INVALIDATE_AIRCRAFT_LIST,
  REQUEST_AIRCRAFT_LIST,
  RECEIVE_AIRCRAFT_LIST,
  INVALIDATE_AIRCRAFT_DETAILS,
  REQUEST_AIRCRAFT_DETAILS,
  RECEIVE_AIRCRAFT_DETAILS
} from '../actions'

function transformAircraft(aircraftList) {
  const store = {}
  aircraftList.map((aircraft) => (store[aircraft.tail] = aircraft))
  return store
}

const details = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case 'INVALIDATE_AIRCRAFT_DETAILS':
      return {
        ...state,
        didInvalidate: false
      }
    case 'REQUEST_AIRCRAFT_DETAILS':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case 'RECEIVE_AIRCRAFT_DETAILS':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        details: action.items,
      }
    default:
      return state
  }
}

const aircraft = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_AIRCRAFT_LIST':
      return {
        ...state,
        ...transformAircraft(action.items),
      }
    case 'INVALIDATE_AIRCRAFT_DETAILS':
    case 'REQUEST_AIRCRAFT_DETAILS':
    case 'RECEIVE_AIRCRAFT_DETAILS':
      return {
        ...state,
        [action.tail]: (details(state[action.tail], action))
      }  
    default:
      return state
  }
}

const aircrafts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case 'INVALIDATE_AIRCRAFT_LIST':
      return {
        ...state,
        didInvalidate: false
      }
    case 'REQUEST_AIRCRAFT_LIST':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case 'RECEIVE_AIRCRAFT_LIST':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        items: aircraft(state.items, action)
      }
    case 'INVALIDATE_AIRCRAFT_DETAILS':
    case 'REQUEST_AIRCRAFT_DETAILS':
    case 'RECEIVE_AIRCRAFT_DETAILS':
      return {
        ...state,
        items: aircraft(state.items, action)
      }
    default:
      return state
  }
}

export default aircrafts
