import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { cookiesReducer } from './cookies'

const reducer = combineReducers({
  cookies: cookiesReducer,
})

export * from './cookies'

export default createStore(
  reducer,
  applyMiddleware(
    thunk,
    createLogger({
      collapsed: true,
    })
  )
)
