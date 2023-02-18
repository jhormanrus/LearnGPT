'use client'
import { useEffect, useMemo, useState } from 'react'
import styles from './prompt.module.css'
import Token from './token'

interface PromptProps {
  text: string
}

export default function Prompt ({ text }: PromptProps): JSX.Element {
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
    const splitedText = text.split(' ')
    const tokens = splitedText.map((word, i) => {
      const isLast = i === splitedText.length - 1
      return isLast ? word : `${word} `
    })
    return tokens
  }, [text])

  return [tokens]
}

function useTypedText (): { typedText: string } {
  const [typedText, setTypedText] = useState<string>('')

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent): void => {
      const isChar = event.key.length === 1
      const isBackspace = event.key === 'Backspace'
      if (isChar) {
        setTypedText(typedText => typedText + event.key)
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
