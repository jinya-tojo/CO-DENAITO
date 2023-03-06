import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  box: () => css`
    width: 600px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 25px;
    margin-bottom: 25px;
  `,
  title: () => css`
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 15px;
  `,
  container: () => css`
    display: flex;
  `,
  image: () => css`
    position: relative;
    width: 120px;
    height: 140px;
    margin-right: 40px;
  `,
  bland: () => css`
    font-size: 16px;
    color: #999;
    padding-top: 15px;
  `,
  item: () => css`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
  `,
  category: () => css`
    font-size: 12px;
    color: white;
    background-color: #c27021;
    display: inline-block;
    padding: 4px 8px;
    border-radius: 2px;
  `,
})
