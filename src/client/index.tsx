import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { NavBar } from './components'

import store from './store'

const App = () => {
  useEffect(() => {
    store.dispatch({ type: 'HELLO_REDUX' })
  })
  return (
    <Provider store={store}>
      <NavBar />
      <h3 style={{ textAlign: 'center' }}>Home Page</h3>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
