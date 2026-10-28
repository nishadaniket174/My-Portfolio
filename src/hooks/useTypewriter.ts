import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speed = 25, delay = 200) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let index = 0
    let timer: number
    setDisplayedText('')
    setIsDone(false)

    const startTimer = window.setTimeout(() => {
      timer = window.setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          setIsDone(true)
          window.clearInterval(timer)
        }
      }, speed)
    }, delay)

    return () => {
      window.clearTimeout(startTimer)
      window.clearInterval(timer)
    }
  }, [text, speed, delay])

  return { displayedText, isDone }
}

