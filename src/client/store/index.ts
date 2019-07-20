import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const reducer = (state = { stuff: '' }) => {
  return state
}

export default createStore(reducer, applyMiddleware(logger))
