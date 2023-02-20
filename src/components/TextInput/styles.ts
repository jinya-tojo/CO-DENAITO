import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  input: () => css`
    width: 400px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 14px;
    margin-bottom: 15px;
  `,
})

export const inputStyle = makeStyles({
  label: () => css`
    font-size: 12px;
  `,
})
