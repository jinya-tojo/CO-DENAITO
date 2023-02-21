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

export const buttonStyles = makeStyles({
  button: () => css`
    height: 40px;
    width: 110px;
    background-color: #5b3c34;
    color: white;
    border: none;
    border-radius: 4px;
    margin-right: 20px;
    margin-top: 10px;
    &:hover {
      cursor: pointer;
    }
  `,
})

export const iconStyles = makeStyles({
  icon: () => css`
    position: relative;
    width: 40px;
    height: 40px;
    margin-top: 9px;
  `,
})
