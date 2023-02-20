import { getBackgroundColorStyle, getColorStyle, styles } from './styles'

type ButtonProps = {
  backgroundColor: string
  color: string
  text: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  text,
  onClick,
}) => {
  return (
    <button
      css={[
        styles.container,
        getBackgroundColorStyle(backgroundColor),
        getColorStyle(color),
      ]}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
