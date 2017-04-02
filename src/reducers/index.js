import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

import aircrafts from './aircrafts'
import selectedAircraft from './selectedAircraft'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  aircrafts,
  selectedAircraft
})

export default todoApp
