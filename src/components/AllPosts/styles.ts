import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    /* background-color:#ddd; */
    width: 960px;
    padding: 80px 0 80px 80px;
    display: flex;
    flex-wrap: wrap;
  `,
})
