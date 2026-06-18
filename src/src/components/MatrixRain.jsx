import { useEffect, useRef } from 'react'
import './MatrixRain.css'

function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width, height, columns, drops

    const setup = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      columns = Math.floor(width / 18)
      drops = Array.from({ length: columns }, () => Math.random() * -100)
    }

    setup()
    window.addEventListener('resize', setup)

    const chars = '01'

    let animationId

    const draw = () => {
      ctx.fillStyle = 'rgba(13, 13, 16, 0.08)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = '14px "Space Mono", monospace'

      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * 18
        const y = drops[i] * 18

        const colorPick = i % 3
        if (colorPick === 0) ctx.fillStyle = 'rgba(120, 80, 255, 0.35)'
        else if (colorPick === 1) ctx.fillStyle = 'rgba(0, 180, 120, 0.35)'
        else ctx.fillStyle = 'rgba(255, 120, 50, 0.25)'

        ctx.fillText(char, x, y)

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setup)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-rain" />
}

export default MatrixRain