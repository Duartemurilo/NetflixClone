import React from 'react'
import HomePage from '../Pages/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
