import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

interface AuthContextType {
  // useStates
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  currentPage: string
  setCurrentPage: Dispatch<SetStateAction<string>>

  // Functions
  toggleDrawer: () => void
}

const AuthContext = createContext<AuthContextType>({
  // useStates
  isAuthenticated: false,
  setIsAuthenticated: () => {
    // set authenticated value.
  },

  currentPage: 'home',
  setCurrentPage: () => {
    // set current  page.
  },

  // Functions
  toggleDrawer: () => {
    // set menu open and closed value
  }
})

// Provider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [loggedID, setLoggedID] = useState('')

  const toggleDrawer = () => {
    // só de exemplo por enquanto
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        toggleDrawer,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
