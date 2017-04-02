export const SET_SELECTED_AIRCRAFT = 'SET_SELECTED_AIRCRAFT'
export const INVALIDATE_AIRCRAFT_LIST = 'INVALIDATE_AIRCRAFT_LIST'
export const REQUEST_AIRCRAFT_LIST = 'REQUEST_AIRCRAFT_LIST'
export const RECEIVE_AIRCRAFT_LIST = 'RECEIVE_AIRCRAFT_LIST'
export const INVALIDATE_AIRCRAFT_DETAILS = 'INVALIDATE_AIRCRAFT_DETAILS'
export const REQUEST_AIRCRAFT_DETAILS = 'REQUEST_AIRCRAFT_DETAILS'
export const RECEIVE_AIRCRAFT_DETAILS = 'RECEIVE_AIRCRAFT_DETAILS'

export function selectAircraft(tail) {
  return {
    type: SET_SELECTED_AIRCRAFT,
    tail
  }
}

export function invalidateAircraftList() {
  return {
    type: INVALIDATE_AIRCRAFT_LIST,
    
  }
}

export function requestAircraftList() {
  return {
    type: REQUEST_AIRCRAFT_LIST,
    
  }
}

function receiveAircraftList(json) {
  return {
    type: RECEIVE_AIRCRAFT_LIST,

    items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function invalidateAircraftDetails(tail) {
  return {
    type: INVALIDATE_AIRCRAFT_DETAILS,
    tail
  }
}

export function requestAircraftDetails(tail) {
  return {
    type: REQUEST_AIRCRAFT_DETAILS,
    tail
  }
}

export function receiveAircraftDetails(tail, json) {
  return {
    type: RECEIVE_AIRCRAFT_DETAILS,
    tail,
    items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const fetchAircraftList = () => dispatch => {
  dispatch(requestAircraftList())
  const dummyResponse = `[{"id":1,"tail":"LX-GLD","name":"Falcon 900EX EASy"},{"id":2,"tail":"LY-ZAB","name":"Challenger 850"},{"id":3,"tail":"9H-MAJ","name":"Challenger 604"},{"id":4,"tail":"S5-JVA","name":"Gulfstream G450"},{"id":5,"tail":"HB-JOE","name":"Gulfstream G550"}]`
  return fetch(`https://privatefly-interview-api.herokuapp.com/api/v1/aircraft`)
    .then(response => response.json())
    .then(json => dispatch(receiveAircraftList(dummyResponse)))
}

const shouldFetchAircraftList = (state) => {
  const posts = state.aircrafts
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchAircraftListIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchAircraftList(getState())) {
    return dispatch(fetchAircraftList())
  }
}

const fetchAircraftDetails = tail => dispatch => {
  dispatch(requestAircraftDetails(tail))
  return fetch(`https://privatefly-interview-api.herokuapp.com/api/v1/aircraft/${tail}`)
    .then(response => response.json())
    .then(json => dispatch(receiveAircraftDetails(tail, json)))
}

const shouldFetchAircraftDetails = (state, tail) => {
  const item = state.aircrafts[tail]
  if (!item) {
    return true
  }
  if (item.isFetching) {
    return false
  }
  return item.didInvalidate
}

export const fetchAircraftDetailsIfNeeded = tail => (dispatch, getState) => {
  if (shouldFetchAircraftDetails(getState(), tail)) {
    return dispatch(fetchAircraftList(tail))
  }
}