import { connect } from 'react-redux'
import { selectAircraft, fetchAircraftDetailsIfNeeded } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.tail === state.selectedAircraft
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(selectAircraft(ownProps.tail))
    dispatch(fetchAircraftDetailsIfNeeded(ownProps.tail))
  }
})

const DetailLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default DetailLink
