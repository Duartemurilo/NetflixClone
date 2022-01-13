import React, { useState } from 'react'
import { RedProfile } from './Constants/UrlImg'

export const AuthContext = React.createContext([])

export const AuthProvider = (props) => {
  const [currentProfile, setCurrentProfile] = useState(RedProfile)
  const [heightWatchPage, setHeightWatchPage] = useState('100vh')
  return (
    <AuthContext.Provider value={{ currentProfile, setCurrentProfile, heightWatchPage, setHeightWatchPage }}>
      {props.children}
    </AuthContext.Provider>
  )
}
