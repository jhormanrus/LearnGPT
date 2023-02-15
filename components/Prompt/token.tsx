import styles from './prompt.module.css'
import Key from './key'

interface TokenProps {
  value: string
}

export default function Token ({ value }: TokenProps): JSX.Element {
  return <span className={styles.token}>
    {
      value.split('').map((char, i) => (
        <Key char={char} key={i} />
      ))
    }
  </span>
}
