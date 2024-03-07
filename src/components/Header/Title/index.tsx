import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { presets } from 'react-text-transition'
import TextTransition from 'react-text-transition'
import { useTheme } from 'styled-components'

const TEXTS = ['Vinicius', 'Donato', 'Beltrão', 'Bandeira']

const TextTransitionComponent = () => {
  const theme = useTheme()
  const [index, setIndex] = useState(0)
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={springProps}>
      <div
        style={{
          cursor: 'pointer',
          color: theme.titleNavbar,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: '1.5rem',
          marginLeft: '2rem'
        }}
        onMouseEnter={() => setIndex(index + 1)}
      >
        Yuri
        <TextTransition
          style={{ marginLeft: '0.5rem' }}
          springConfig={presets.wobbly}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </div>
    </animated.div>
  )
}

export default TextTransitionComponent
