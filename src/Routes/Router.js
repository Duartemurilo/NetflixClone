import React from 'react'
import HomePage from '../Pages/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PerfilPage from '../Pages/PerfilPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route exact path={'/PerfilPage'}>
          <PerfilPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
