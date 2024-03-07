import { useEffect, useRef } from 'react'
import * as S from './styles'
import { useTheme } from 'styled-components'

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!)
  const theme = useTheme()

  const speed = 20
  const columnsSize = 20

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let columns = Math.floor(width / columnsSize)
    const characters = 'yuriviniciusdonatobeltraobandeira'
    const charArray = characters.split('')
    let drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }
    const frameRate = speed
    let lastFrameTime = Date.now()

    const draw = () => {
      ctx!.fillStyle = theme.backgroundMatrix
      ctx!.fillRect(0, 0, width, height)

      ctx!.fillStyle = theme.fontColorMatrix

      ctx!.font = '15px monospace'
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx!.fillText(text, i * columnsSize, drops[i] * columnsSize)

        if (drops[i] * columnsSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const animate = () => {
      const currentTime = Date.now()
      const ellapsedTime = currentTime - lastFrameTime

      if (ellapsedTime > 1000 / frameRate) {
        draw()
        lastFrameTime = currentTime
      }

      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      columns = Math.floor(width / columnsSize)
      drops = []
      for (let i = 0; i < columns; i++) {
        drops[i] = 1
      }
    }

    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
    if (!isMobileDevice) {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (!isMobileDevice) {
        window.addEventListener('resize', handleResize)
      }
    }
  })

  return <S.CustomCanvas ref={canvasRef}></S.CustomCanvas>
}

export default MatrixBackground
