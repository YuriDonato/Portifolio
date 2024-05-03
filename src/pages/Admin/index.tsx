import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as S from '../../styles'
import { useAuth } from '../../data/AuthProvider'
import RegisterProjectTab from '../../components/AdminPage/registerProject'

const Admin = () => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { isAuthenticated, setIsAuthenticated } = useAuth()

  const handleSubmit = () => {
    if (user == 'admin' && password == '123') {
      setIsAuthenticated(true)
    } else {
      // fazer depois
    }
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <RegisterProjectTab />
        </>
      ) : (
        <>
          <S.MainCard
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              style={{ color: 'black' }}
              type="text"
              value={user}
              onChange={(e) => {
                setUser(e.target.value)
              }}
            />
            <input
              style={{ color: 'black' }}
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <button onClick={handleSubmit}>Entrar</button>
          </S.MainCard>
        </>
      )}
    </>
  )
}

export default Admin
