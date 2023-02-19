import { styles } from './styles'

type ButtonProps = {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button css={styles.container}>{text}</button>
}
