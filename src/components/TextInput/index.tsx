import React, { useId } from 'react'
import {
  styles,
  inputStyle,
  getWithStyle,
  getFontSizeStyle,
  getTagStyle,
  titlesStyles,
} from './styles'

type TextInputProps = {
  tag: string
  width: string
  size: string
  label: string
  onChange: (v: string) => void
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  onChange,
  width,
  size,
  tag,
}) => {
  const id = useId()

  return (
    <>
      <div css={titlesStyles.titles}>
        <label css={[inputStyle.label, getFontSizeStyle(size)]} htmlFor={id}>
          {label}
        </label>
        <p css={[getTagStyle(tag)]}>必須</p>
      </div>
      <input
        css={[styles.input, getWithStyle(width)]}
        type="text"
        id={id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value)
        }}
      />
      <br />
    </>
  )
}
