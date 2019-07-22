import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ListCookies, NavBar, HomePage } from './components'

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/cookies" component={ListCookies} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}
