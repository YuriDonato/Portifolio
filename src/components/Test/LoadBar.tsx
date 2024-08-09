// src/components/LoadBar.tsx

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LoadBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Centraliza verticalmente */
`

const ProgressBar = styled(motion.div)`
  width: 300px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 25%;
`

const Progress = styled(motion.div)<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #0f0;
  transition: width 0.5s ease;
`

const JokeText = styled(motion.p)`
  font-size: 1.2rem;
  color: #0f0;
  margin-top: 20px;
  font-family: 'Courier New', Courier, monospace;
`

interface LoadBarProps {
  progress: number
}

const LoadBar: React.FC<LoadBarProps> = ({ progress }) => {
  return (
    <LoadBarContainer>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
      <JokeText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Carregando... Por que o código foi ao bar? Para depurar a mente!
      </JokeText>
    </LoadBarContainer>
  )
}

export default LoadBar
