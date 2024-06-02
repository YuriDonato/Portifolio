import * as React from 'react'
import { motion } from 'framer-motion'

export const BounceBall = () => {
  const transitionValues = {
    duration: 2.5,
    repeat: Infinity,
    ease: 'easeOut'
  }

  const ballStyle = {
    display: 'block',
    width: '2rem',
    height: '2rem',
    backgroundColor: 'white',
    borderRadius: '5rem',
    marginRight: 'auto',
    marginLeft: 'auto'
  }

  const containerStyle = {
    overflow: 'hidden', // Ensure no scrollbar appears
    height: '5rem' // Height of the container to contain the ball's movement
  }

  return (
    <div style={containerStyle}>
      <motion.span
        style={ballStyle}
        transition={transitionValues}
        animate={{
          y: ['0rem', '1rem', '0rem'],
          width: ['5rem', '5rem', '5rem'],
          height: ['2rem', '2.5rem', '2rem']
        }}
      />
    </div>
  )
}
