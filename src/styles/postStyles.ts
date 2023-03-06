import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    display: flex;
    width: 1280px;
    margin: 0 auto;
  `,
  inputs: () => css`
    padding: 80px;
    margin: 0 auto;
  `,
  submit: () => css`
    text-align: center;
    padding-top: 50px;
  `,
})
