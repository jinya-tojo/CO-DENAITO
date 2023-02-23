import { borderStyles } from './../LogoutHeader/styles'
import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const boxStyles = makeStyles({
  box: () => css`
    width: 600px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 25px;
  `,
})

export const titleStyles = makeStyles({
  title: () => css`
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 15px;
  `,
})

export const containerStyles = makeStyles({
  container: () => css`
    display: flex;
  `,
})

export const imageStyles = makeStyles({
  image: () => css`
    position: relative;
    width: 120px;
    height: 140px;
    margin-right: 40px;
  `,
})

export const blandStyles = makeStyles({
  bland: () => css`
    font-size: 16px;
    color: #999;
    padding-top: 15px;
  `,
})

export const itemStyles = makeStyles({
  item: () => css`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
  `,
})

export const categoryStyles = makeStyles({
  category: () => css`
    font-size: 12px;
    color: white;
    background-color: #c27021;
    display: inline-block;
    padding: 4px 8px;
    border-radius: 2px;
  `,
})
