import React from 'react'
import ReactDOM from 'react-dom'

const NavBar = ({ children }: { children: any }) => {
  return <nav>{children}</nav>
}

const App = () => {
  return (
    <>
      <NavBar>
        <h1>Hello Typescript</h1>
      </NavBar>
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
