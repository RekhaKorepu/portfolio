import { useState, useEffect } from 'react'

export function useTypewriter(words: string[], speed = 75, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    setDisplayed(word.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}
