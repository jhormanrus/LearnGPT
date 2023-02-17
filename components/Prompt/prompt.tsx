import { useMemo } from 'react'
import styles from './prompt.module.css'
import Token from './token'

interface PromptProps {
  text: string
  typedText: string
}

export default function Prompt ({ text, typedText = 'useMemo es ua' }: PromptProps): JSX.Element {
  const tokens = useTokens(text)
  const typedTokens = useTokens(typedText)

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

function useTokens (text: string): string[] {
  return useMemo(() => {
    const tokens = text.split(' ')
    return tokens.map((token, i) => {
      const isLast = i === text.split(' ').length - 1
      return isLast ? token : `${token} `
    })
  }, [text])
}
