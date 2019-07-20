import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { NavBar, ListCookies } from './components'
import { useDispatch } from 'react-redux'
import { fetchCookies } from './store'

import store from './store'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCookies())
  }, [])
  return (
    <>
      <NavBar />
      <h3 style={{ textAlign: 'center' }}>Home Page</h3>
      <ListCookies />
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
