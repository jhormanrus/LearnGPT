import styles from './prompt.module.css'
import Key from './key'
import { memo } from 'react'

interface TokenProps {
  word: string
  typedWord?: string
}

function Token ({ word, typedWord }: TokenProps): JSX.Element {
  const hasNewLine = word.slice(-1) === '\n'

  return <>
    <span className={styles.token}>
      {
        word.split('').map((char, i) => (
          <Key key={i} char={char} typedChar={typedWord?.[i]} />
        ))
      }
    </span>
    {
      hasNewLine && <span className={styles.breakLine}></span>
    }
  </>
}

export default memo(Token)
