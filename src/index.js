import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './components/App'
import reducer from './reducers'
import { fetchAircraftList }  from './actions'

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
)


store.dispatch(fetchAircraftList()).then(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


