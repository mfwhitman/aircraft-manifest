import React, { PropTypes } from 'react'

const Aircraft = ({ onClick, id, tail, name}) => (
  <li
    onClick={onClick}
  >
    <h2>{tail}</h2>
    <p>{id}</p>
    <p>{name}</p>
  </li>
)

Aircraft.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  tail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Aircraft
