// src/Test.tsx

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BackgroundMatrix from './BackgroundMatrix'
import Header from './Header'
import LoadBar from './LoadBar'
import Projects from './Projects'
import Contact from './Contact'

const AppContainer = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  height: 100vh;
`

const Test: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return prev + 5
      })
    }, 500)
  }, [])

  return (
    <AppContainer>
      <BackgroundMatrix />
      {loading ? (
        <>
          <LoadBar progress={progress} />
        </>
      ) : (
        <>
          <Header />
          <Projects />
          <Contact />
        </>
      )}
    </AppContainer>
  )
}

export default Test
