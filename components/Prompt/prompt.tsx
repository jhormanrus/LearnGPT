import styles from './prompt.module.css'
import Token from './token'

interface PromptProps {
  value: string
}

export default function Prompt ({ value }: PromptProps): JSX.Element {
  const tokens = value.split(' ')

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
