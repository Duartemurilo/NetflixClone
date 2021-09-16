import React from 'react'
import HomePage from '../Pages/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProfilePage from '../Pages/ProfilePage'
import WatchPage from '../Pages/WatchPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route exact path={'/PerfilPage'}>
          <ProfilePage />
        </Route>
        <Route exact path={'/Watch/:details/:type'}>
          <WatchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
