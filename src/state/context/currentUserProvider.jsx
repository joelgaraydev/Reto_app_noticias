import React, { createContext, useEffect } from 'react'
import { logoutUser } from '../../services/authARC/logoutUser'

export const currentUserContext = createContext()

const initialValue = {
  userToken: null,
  userProfile: null
}

const CurrentUserProvider = (props) => {
  const [currentUser, setCurrentUser] = React.useState(initialValue)
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false)

  useEffect(() => {
    checkCurrentUser()
  }, [])

  const checkCurrentUser = () => {
    const userToken = localStorage.getItem('userToken')
    const userProfile = localStorage.getItem('userProfile')
    if (userToken && userProfile) {
      setCurrentUser({
        userToken: JSON.parse(userToken),
        userProfile: JSON.parse(userProfile)
      })
      setIsUserLoggedIn(true)
    } else {
      setIsUserLoggedIn(false)
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser(initialValue)
    setIsUserLoggedIn(false)
    logoutUser({ token: currentUser?.userToken?.accessToken }).then((res) => {
      if (res) console.log('logout ok')
    })
  }

  return (
    <currentUserContext.Provider
      value={{
        currentUser,
        checkCurrentUser,
        logoutCurrentUser,
        isUserLoggedIn
      }}
    >
      {props.children}
    </currentUserContext.Provider>
  )
}

export default CurrentUserProvider
