import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    display: flex;
    width: 1280px;
    margin: 0 auto;
    /* background-color: pink; */
  `,
})

export const inputsStyles = makeStyles({
  inputs: () => css`
    padding: 80px;
    margin: 0 auto;
  `,
})

export const submitStyles = makeStyles({
  submit: () => css`
    text-align: center;
    padding-top: 50px;
  `,
})
