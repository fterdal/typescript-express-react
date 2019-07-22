import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchCookies } from './store'

import store from './store'
import { Routes } from './Routes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCookies())
  }, [])
  return <Routes />
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
