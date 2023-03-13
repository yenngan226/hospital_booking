import React, { createContext, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessToken } from 'src/utils/auth.utils'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  //profile: User | null
  //setProfile: React.Dispatch<React.SetStateAction<User | null>>

  //reset: () => void
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessToken()),
  setIsAuthenticated: () => null
  //profile: getProfile(),
  //setProfile: () => null,

  //reset: () => null
}

export const Appcontext = createContext<AppContextInterface>(initialAppContext)
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  // const [profile, setProfile] = useState<User | null>(initialAppContext.profile)

  // const reset = () => {
  //   setExtendedPurchases([])
  //   setProfile(null)
  //   setIsAuthenticated(false)
  // }
  return (
    <Appcontext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </Appcontext.Provider>
  )
}
