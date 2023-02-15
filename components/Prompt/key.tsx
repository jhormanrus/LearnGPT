import styles from './prompt.module.css'

interface KeyProps {
  char: string
}

export default function Key ({ char }: KeyProps): JSX.Element {
  return <span className={styles.key}>
    {char}
  </span>
}
