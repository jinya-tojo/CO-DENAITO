import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    display: flex;
    width: 1280px;
    margin: 0 auto;
  `,
})

export const inputsStyles = makeStyles({
  inputs: () => css`
    padding: 80px;
    margin: 0 auto;
  `,
})

export const buttonStyles = makeStyles({
  button: () => css`
    text-align: center;
    padding-top: 50px;
  `,
})
