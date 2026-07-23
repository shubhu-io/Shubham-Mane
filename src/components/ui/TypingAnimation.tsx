import { useState, useEffect } from 'react'

const TYPING_SPEED = 80
const DELETING_SPEED = 40
const PAUSE = 2000

interface TypingAnimationProps {
  words: string[]
}

export default function TypingAnimation({ words }: TypingAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, PAUSE)
      return () => clearTimeout(timeout)
    }

    const currentWord = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCharIndex((prev) => prev - 1)
          if (charIndex === 0) {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        } else {
          setCharIndex((prev) => prev + 1)
          if (charIndex === currentWord.length) {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, isPaused, wordIndex, words])

  return (
    <span className="gradient-text font-mono">
      {words[wordIndex].substring(0, charIndex)}
      <span className="animate-pulse text-blue-500">|</span>
    </span>
  )
}
