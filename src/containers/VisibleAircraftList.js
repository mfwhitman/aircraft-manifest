import { connect } from 'react-redux'
import { selectAircraft } from '../actions'
import AircraftList from '../components/AircraftList'

const mapStateToProps = (state) => ({
  aircrafts: state.aircrafts
})

const mapDispatchToProps = {
  onAircraftClick: selectAircraft
}

const VisibleAircraftList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AircraftList)

export default VisibleAircraftList
