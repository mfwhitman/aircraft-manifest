import React, { PropTypes } from 'react'
import Aircraft from './Aircraft'

const AircraftList = ({ aircrafts, onAircraftClick }) => (
  <ul>
    {aircrafts.map(aircraft =>
      <Aircraft
        key={aircraft.id}
        {...aircraft}
        onClick={() => onAircraftClick(aircraft.id)}
      />
    )}
  </ul>
)

AircraftList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  items: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    tail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  onAircraftClick: PropTypes.func.isRequired
}

export default AircraftList
