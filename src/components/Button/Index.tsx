import { getBackgroundColorStyle, styles } from './styles'

type ButtonProps = {
  backgroundColor: string
  text: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  text,
  onClick,
}) => {
  return (
    <button
      css={[styles.container, getBackgroundColorStyle(backgroundColor)]}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
