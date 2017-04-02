/*
import React from 'react'
import VisibleAircraftList from '../containers/VisibleAircraftList'

const App = () => (
  <div>
    <VisibleAircraftList />
  </div>
)

export default App
*/


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchAircraftListIfNeeded, invalidateAircraftList } from '../actions'
import VisibleAircraftList from '../containers/VisibleAircraftList'

class App extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAircraftListIfNeeded())
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(invalidateAircraftList())
    dispatch(fetchAircraftListIfNeeded())
  }

  render() {
    const { items, isFetching, lastUpdated } = this.props
    const isEmpty = items.length === 0
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <VisibleAircraftList />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { aircrafts } = state
  const {
  	items,
    isFetching,
    lastUpdated,
  } = aircrafts || {
  	items: [],
    isFetching: true,
  }

  return {
    items,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)