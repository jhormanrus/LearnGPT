import styles from './prompt.module.css'
import Key from './key'

interface TokenProps {
  word: string
  typedWord?: string
}

export default function Token ({ word, typedWord }: TokenProps): JSX.Element {
  return <span className={styles.token}>
    {
      word.split('').map((char, i) => (
        <Key key={i} char={char} typedChar={typedWord?.[i]} />
      ))
    }
  </span>
}
