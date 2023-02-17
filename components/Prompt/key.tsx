import styles from './prompt.module.css'

interface KeyProps {
  char: string
  typedChar?: string
}

export default function Key ({ char, typedChar }: KeyProps): JSX.Element {
  const className = [styles.key]

  if (typedChar === char) {
    className.push(styles.keyMatched)
  }
  if (typedChar !== undefined && typedChar !== char) {
    className.push(styles.keyNotMatched)
  }

  return <span className={className.join(' ')}>
    {char}
  </span>
}
