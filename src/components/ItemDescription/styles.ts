import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyle = makeStyles({
  container: () => css`
    display: flex;
    padding: 80px 80px 0 80px;
    /* padding-top:80px;
    padding-right:80px; */
  `,
})

export const itemImageStyles = makeStyles({
  image: () => css`
    position: relative;
    width: 360px;
    height: 420px;
    margin-right: 40px;
  `,
})

export const descriptionStyles = makeStyles({
  description: () => css`
    width: 400px;
  `,
})

export const blandStyles = makeStyles({
  bland: () => css`
    font-size: 24px;
    color: #999;
  `,
})

export const itemStyles = makeStyles({
  item: () => css`
    font-size: 32px;
    font-weight: bold;
    color: #333;
    padding-bottom: 30px;
  `,
})

export const textStyles = makeStyles({
  text: () => css`
    font-size: 14px;
    color: #333;
  `,
})

export const categoryStyles = makeStyles({
  category: () => css`
    background-color: #c27021;
    color: white;
    font-size: 12px;
    line-height: 28px;
    display: inline-block;
    border-radius: 4px;
    padding: 0 16px;
    margin: 20px 0 18px;
  `,
})

export const wantStyles = makeStyles({
  want: () => css`
    display: flex;
    font-size: 14px;
    color: #333;
    padding-bottom: 20px;
  `,
})

export const wantIconStyles = makeStyles({
  wantIcon: () => css`
    position: relative;
    width: 18px;
    height: 18px;
    margin-top: 1.5px;
    margin-right: 5px;
  `,
})

export const buttonStyles = makeStyles({
  button: () => css`
    display: flex;
    height: 40px;
    background-color: #5b3c34;
    border: none;
    border-radius: 4px;
  `,
})

export const addIconStyles = makeStyles({
  addIcon: () => css`
    position: relative;
    width: 20px;
    height: 22px;
    margin: 9px 4px 9px 16px;
  `,
})

export const suggestStyles = makeStyles({
  suggest: () => css`
    font-size: 14px;
    color: white;
    line-height: 40px;
    padding-right: 16px;
  `,
})
