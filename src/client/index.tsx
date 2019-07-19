import React from 'react'
import ReactDOM from 'react-dom'
import { NavBar } from './components'

const App = () => {
  return (
    <>
      <NavBar />
      <ul>
        <li>
          <a href="/api/cookies">All Cookies</a>
        </li>
        <li>
          <a href="/api/cookies/1">Cookie: 1</a>
        </li>
      </ul>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
