import { useMemo } from 'react'
import styles from './prompt.module.css'
import Token from './token'

interface PromptProps {
  text: string
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

export default function Prompt ({ text }: PromptProps): JSX.Element {
  const tokens = useTokens(text)

  return (
    <div className={styles.prompt}>
      {
        tokens.map((token, i) => (
          <Token value={token} key={i} />
        ))
      }
    </div>
  )
}
