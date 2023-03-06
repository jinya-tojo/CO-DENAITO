import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  title: () => css`
    display: flex;
  `,
  label: () => css`
    font-size: 14px;
    font-weight: bold;
    padding-right: 10px;
  `,
  tag: () => css`
    font-size: 10px;
    color: white;
    background-color: #c93434;
    padding: 2px 4px;
    font-weight: bold;
    margin-bottom: 3px;
  `,
  select: () => css`
    width: 600px;
    font-size: 16px;
    padding: 17.5px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 30px;
  `,
})
