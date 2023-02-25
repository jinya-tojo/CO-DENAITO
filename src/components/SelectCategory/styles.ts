import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const titleStyles = makeStyles({
  title: () => css`
    display: flex;
  `,
})

export const labelStyles = makeStyles({
  label: () => css`
    font-size: 14px;
    font-weight: bold;
    padding-right: 10px;
  `,
})

export const tagStyles = makeStyles({
  tag: () => css`
    font-size: 10px;
    color: white;
    background-color: #c93434;
    padding: 2px 4px;
    font-weight: bold;
    margin-bottom: 3px;
  `,
})

export const selectStyles = makeStyles({
  select: () => css`
    width: 600px;
    font-size: 16px;
    padding: 17.5px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 30px;
  `,
})

export const labelStyle = makeStyles({
  label: () => css`
    font-size: 12px;
  `,
})
