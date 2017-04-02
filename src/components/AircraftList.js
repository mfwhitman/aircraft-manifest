import React, { PropTypes } from 'react'
import Aircraft from './Aicraft'

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
  aircrafts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    tail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onAircraftClick: PropTypes.func.isRequired
}

export default AircraftList
