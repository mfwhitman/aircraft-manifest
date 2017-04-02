import {
  INVALIDATE_AIRCRAFT_LIST,
  REQUEST_AIRCRAFT_LIST,
  RECEIVE_AIRCRAFT_LIST,
  INVALIDATE_AIRCRAFT_DETAILS,
  REQUEST_AIRCRAFT_DETAILS,
  RECEIVE_AIRCRAFT_DETAILS
} from '../actions'

const details = (state = [], action) => {
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
        items: action.items,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const aircraft = (state = {
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
        items: action.items,
        lastUpdated: action.receivedAt
      }
    case 'INVALIDATE_AIRCRAFT_DETAILS':
    case 'REQUEST_AIRCRAFT_DETAILS':
    case 'RECEIVE_AIRCRAFT_DETAILS':
      return {
        ...state,
        items: (details(state, action))
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
    case 'REQUEST_AIRCRAFT_LIST':
    case 'RECEIVE_AIRCRAFT_LIST':
      return {
        ...state,
        items: aircraft(state, action)
      }
    case 'INVALIDATE_AIRCRAFT_DETAILS':
    case 'REQUEST_AIRCRAFT_DETAILS':
    case 'RECEIVE_AIRCRAFT_DETAILS':
      return {
        ...state,
        items: aircraft(state, action)
      }
    default:
      return state
  }
}

export default aircrafts
