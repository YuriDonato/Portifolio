// src/components/Header.tsx

import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeaderContainer = styled(motion.header)`
  width: 100%;
  height: fit-content;
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid #0f0;
  box-shadow: 0 0 10px #0f0;
`

const Title = styled(motion.h1)`
  color: #0f0;
  font-size: 3rem;
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 0 0 5px #0f0;
`

const Subtitle = styled(motion.h2)`
  color: #0f0;
  font-size: 1.5rem;
  margin-top: 10px;
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 0 0 5px #0f0;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Yuri Donato
      </Title>
      <Subtitle
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Full-Stack Developer
      </Subtitle>
    </HeaderContainer>
  )
}

export default Header
