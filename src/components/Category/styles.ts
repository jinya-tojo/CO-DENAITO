import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    width: 320px;
    padding-left: 80px;
    padding-top: 80px;
  `,
})

export const titleStyles = makeStyles({
  title: () => css`
    font-size: 18px;
    font-weight: normal;
    padding-bottom: 13px;
  `,
})

export const ulStyles = makeStyles({
  ul: () => css`
    list-style: none;
    font-size: 14px;
  `,
})

export const liStyles = makeStyles({
  li: () => css`
    padding-bottom: 9px;
    &:hover {
      cursor: pointer;
    }
  `,
})
