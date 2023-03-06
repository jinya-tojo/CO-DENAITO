import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    display: flex;
    width: 1280px;
    margin: 0 auto;
    padding-bottom: 150px;
  `,
  inputs: () => css`
    padding-top: 80px;
    margin: 0 auto;
  `,
  image: () => css`
    margin-left: 100px;
  `,
  complete: () => css`
    padding-top: 70px;
  `,
  cancel: () => css`
    padding-top: 20px;
  `,
})
