import React, { PropTypes } from 'react'
import Aircraft from './Aircraft'

const AircraftList = ({ aircrafts, onAircraftClick }) => {
  const  items  = aircrafts.items

  /*const listItems = items.map(aircraft =>
    <Aircraft
      key={aircraft.id}
      {...aircraft}
      onClick={() => onAircraftClick(aircraft.id)}
    />
  )*/
  const listItems = Object.keys(items).map((key) => {
    const aircraft = items[key]
    return (
      <Aircraft
        key={key}
        {...aircraft}
        onClick={() => onAircraftClick(aircraft.id)}
      />
    )
  })

  return (
  <ul>
    {listItems}
  </ul>
)}

AircraftList.propTypes = {
  aircrafts: PropTypes.object.isRequired,
  onAircraftClick: PropTypes.func.isRequired,
}

export default AircraftList
