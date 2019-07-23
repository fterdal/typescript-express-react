import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ListCookies, SingleCookie, NavBar, CreateCookie, HomePage } from './components'

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/cookies/new" component={CreateCookie} />
        <Route path="/cookies/:id" component={SingleCookie} />
        <Route path="/cookies" component={ListCookies} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}
