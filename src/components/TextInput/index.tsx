import React, { useId } from 'react'
import { styles, getWithStyle, getFontSizeStyle, getTagStyle } from './styles'

type TextInputProps = {
  tag: string
  width: string
  size: string
  label: string
  onChange: (v: string) => void
  value: string
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  onChange,
  width,
  size,
  tag,
  value,
}) => {
  const id = useId()

  return (
    <>
      <div css={styles.titles}>
        <label css={[styles.label, getFontSizeStyle(size)]} htmlFor={id}>
          {label}
        </label>
        <p css={[getTagStyle(tag)]}>必須</p>
      </div>
      <input
        css={[styles.input, getWithStyle(width)]}
        type="text"
        id={id}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value)
        }}
      />
      <br />
    </>
  )
}
