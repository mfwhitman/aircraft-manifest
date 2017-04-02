import React, { PropTypes } from 'react'
import DetailLink from '../containers/DetailLink'

const Aircraft = ({ onClick, id, tail, name, details}) => (
  <li>
    <h2>{tail}</h2>
    <p>{id}</p>
    <p>{name}</p>
    {details && 
    	<p>{details}</p>
    }
    <DetailLink tail={tail}>
      More
    </DetailLink>
  </li>
)

Aircraft.propTypes = {
  id: PropTypes.number,
  tail: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.array
}

export default Aircraft
