import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    width: 960px;
    padding: 80px 80px 0 80px;
  `,
})

export const titleStyles = makeStyles({
  title: () => css`
    font-size: 24px;
    color: #333;
    padding-bottom: 30px;
  `,
})

export const itemsStyles = makeStyles({
  items: () => css`
    display: flex;
    flex-wrap: wrap;
  `,
})
