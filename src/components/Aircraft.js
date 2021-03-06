import React, { PropTypes } from 'react'
import DetailLink from '../containers/DetailLink'
import config from '../config.js'

const Aircraft = ({ onClick, id, tail, name, details}) => (
  <li>
    <h2>{tail}</h2>
    <p>{id}</p>
    <p>{name}</p>
    {details ?
      <div>
      	<p>{details.class}</p>
        <img src={config.imageEndpoint.URL + details.image}></img>
        <p>Passengers: {details.passengers}</p>
        <p>Year: {details.year}</p>
      </div>
      :
      <DetailLink tail={tail}>
      More
    </DetailLink>
    }
    
  </li>
)

Aircraft.propTypes = {
  id: PropTypes.number,
  tail: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.object
}

export default Aircraft
