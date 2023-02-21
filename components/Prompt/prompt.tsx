'use client'
import { useEffect, useMemo, useState } from 'react'
import styles from './prompt.module.css'
import Token from './token'

interface PromptProps {
  text: string
}

export default function Prompt ({ text }: PromptProps): JSX.Element {
  console.log(text)
  const { typedText } = useTypedText()
  const [tokens] = useTokens(text)
  const [typedTokens] = useTokens(typedText)

  return (
    <div className={styles.prompt}>
      {
        tokens.map((word, i) => (
          <Token key={i} word={word} typedWord={typedTokens[i]} />
        ))
      }
    </div>
  )
}

function useTokens (text: string): [string[]] {
  const tokens = useMemo(() => {
    const regex = /(?<=[\n ])/
    return text.split(regex)
  }, [text])

  return [tokens]
}

function useTypedText (): { typedText: string } {
  const [typedText, setTypedText] = useState<string>('')

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent): void => {
      const isChar = event.key.length === 1
      const isEnter = event.key === 'Enter'
      const isBackspace = event.key === 'Backspace'
      if (isChar) {
        setTypedText(typedText => typedText + event.key)
      }
      if (isEnter) {
        setTypedText(typedText => typedText + '\n')
      }
      if (isBackspace) {
        setTypedText(typedText => typedText.slice(0, -1))
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return { typedText }
}
