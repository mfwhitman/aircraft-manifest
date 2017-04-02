import { connect } from 'react-redux'
import { selectAircraft } from '../actions'
import AircraftList from '../components/AircraftList'

const getVisibleAircrafts = (aircrafts, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return aircrafts
    case 'SHOW_COMPLETED':
      return aircrafts.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return aircrafts.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  aircrafts: getVisibleAircrafts(state.aircrafts, state.visibilityFilter)
})

const mapDispatchToProps = {
  onAircraftClick: selectAircraft
}

const VisibleAircraftList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AircraftList)

export default VisibleAircraftList
