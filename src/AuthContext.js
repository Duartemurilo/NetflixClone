import React, { useState } from 'react'
import { RedProfile } from './Constants/UrlImg'

export const AuthContext = React.createContext([])

export const AuthProvider = (props) => {
  const [currentProfile, setCurrentProfile] = useState(RedProfile)

  return <AuthContext.Provider value={{ currentProfile, setCurrentProfile }}>{props.children}</AuthContext.Provider>
}
