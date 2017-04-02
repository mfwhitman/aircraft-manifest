import React, { PropTypes } from 'react'

const Aircraft = ({ onClick, id, tail, name}) => (
  <li>
    <h2>{tail}</h2>
    <p>{id}</p>
    <p>{name}</p>
  </li>
)

Aircraft.propTypes = {
  id: PropTypes.number.isRequired,
  tail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Aircraft
