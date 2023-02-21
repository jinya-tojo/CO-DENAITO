import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const headerStyles = makeStyles({
  header: () => css`
    width: 100%;
    height: 60px;
    padding-right: 40px;
    padding-left: 40px;
    border: 1px solid #ddd;
  `,
})

export const logoStyles = makeStyles({
  logo: () => css`
    position: relative;
    width: 250px;
    height: 32px;
    float: left;
    margin-top: 14px;
  `,
})

export const listStyles = makeStyles({
  list: () => css`
    float: right;
    display: flex;
    font-size: 14px;
    line-height: 60px;
  `,
})

export const borderStyles = makeStyles({
  border: () => css`
    padding-right: 15px;
    margin-right: 15px;
    margin-top: 23px;
    height: 14px;
    border-right: 1px solid #333;
  `,
})
