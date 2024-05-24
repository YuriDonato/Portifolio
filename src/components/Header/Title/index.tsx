import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { presets } from 'react-text-transition'
import TextTransition from 'react-text-transition'
import styled, { useTheme } from 'styled-components'
import { useAuth } from '../../../data/AuthProvider'

const TEXTS = ['Vinicius', 'Donato', 'Beltrão', 'Bandeira']

const TextTransitionComponent = () => {
  const theme = useTheme()
  const { setCurrentPage } = useAuth()
  const [index, setIndex] = useState(0)
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } })

  const MainContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    width: fit-content;
    color: rgb(113, 171, 138);
  `

  return (
    <animated.div style={springProps}>
      <div
        style={{
          cursor: 'pointer',
          color: `rgb(113, 171, 138)`,
          display: 'flex',
          // flexDirection: 'row',
          alignItems: 'center',
          fontSize: '1.5rem',
          // marginLeft: '2rem',
          width: 'fit-content',
          overflow: 'hidden'
        }}
        onMouseEnter={() => setIndex(index + 1)}
        onClick={() => setCurrentPage('home')}
      >
        Yuri
        <TextTransition
          style={{
            marginLeft: '0.5rem',
            color: 'rgb(113, 171, 138)',
            overflow: 'hidden'
          }}
          springConfig={presets.wobbly}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </div>
    </animated.div>
  )
}

export default TextTransitionComponent
