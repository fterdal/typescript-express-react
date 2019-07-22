import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { cookiesReducer } from './cookies'

const rootReducer = combineReducers({
  cookies: cookiesReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export * from './cookies'

export default createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    createLogger({
      collapsed: true,
    })
  )
)
