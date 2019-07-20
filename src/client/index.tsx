import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { NavBar } from './components'
import { useDispatch } from 'react-redux'
import { fetchCookies } from './store'

import store from './store'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCookies())
  }, [])
  return (
    <Provider store={store}>
      <NavBar />
      <h3 style={{ textAlign: 'center' }}>Home Page</h3>
    </Provider>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
