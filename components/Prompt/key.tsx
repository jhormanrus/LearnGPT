import { memo } from 'react'
import styles from './prompt.module.css'

interface KeyProps {
  char: string
  typedChar?: string
}

function Key ({ char, typedChar }: KeyProps): JSX.Element {
  const isNewLine = char === '\n'
  const className = [styles.key]

  if (typedChar === char) {
    className.push(styles.keyMatched)
  }
  if (typedChar !== undefined && typedChar !== char) {
    className.push(styles.keyNotMatched)
  }

  return <span className={className.join(' ')}>
    {isNewLine ? '↵' : char}
  </span>
}

export default memo(Key)
