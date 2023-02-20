import React, { useId } from 'react'
import { styles, inputStyle } from './styles'

type TextInputProps = {
  label: string
  onChange: (v: string) => void
}

export const TextInput: React.FC<TextInputProps> = ({ label, onChange }) => {
  const id = useId()

  return (
    <>
      <label css={inputStyle.label} htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        css={styles.input}
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
