import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 200px;
  `,
})

export const postStyles = makeStyles({
  posts: () => css`
    width: 960px;
    padding: 80px 0 80px 80px;
    display: flex;
    flex-wrap: wrap;
  `,
})
