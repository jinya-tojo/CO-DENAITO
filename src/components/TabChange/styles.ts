import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    display: flex;
    height: 33px;
    padding: 0 80px;
  `,
  Icon: () => css`
    position: relative;
    width: 18px;
    height: 18px;
    margin-right: 7px;
  `,
  iconWithTitle1: () => css`
    display: flex;
    justify-content: center;
    border-top: 1px solid #333;
    width: 400px;
    height: 18px;
    text-align: center;
    padding-top: 15px;
    color: #999;
    border-top: 1px solid #999;
    &:hover {
      cursor: pointer;
    }
  `,
  iconWithTitle2: () => css`
    display: flex;
    justify-content: center;
    border-top: 1px solid #333;
    width: 400px;
    height: 18px;
    text-align: center;
    padding-top: 15px;
    color: #333;
    border-top: 3px solid #5b3c34;
    &:hover {
      cursor: pointer;
    }
  `,
  title: () => css`
    font-size: 14px;
    line-height: 18px;
  `,
})
