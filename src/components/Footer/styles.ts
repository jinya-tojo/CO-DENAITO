import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  footer: () => css`
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
  `,
  imageBox: () => css`
    position: relative;
    width: 190px;
    height: 25px;
    margin: 0 auto;
  `,
  image: () => css`
    margin-top: 17.5px;
  `,
})
