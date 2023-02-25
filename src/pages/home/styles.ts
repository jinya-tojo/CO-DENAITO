import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    width: 1280px;
    margin: 0 auto;
    /* background-color: #ddd; */
    display: flex;
    justify-content: center;
  `,
})
