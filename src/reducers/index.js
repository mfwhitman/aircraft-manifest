import { combineReducers } from 'redux'

import aircrafts from './aircrafts'
import selectedAircraft from './selectedAircraft'

const aircraftApp = combineReducers({
  aircrafts,
  selectedAircraft
})

export default aircraftApp
