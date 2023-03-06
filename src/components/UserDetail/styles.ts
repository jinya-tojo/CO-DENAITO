import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    display: flex;
    justify-content: center;
    width: 960px;
    padding: 80px 80px 50px 80px;
  `,
  imageBox: () => css`
    position: relative;
    width: 120px;
    height: 120px;
  `,
  image: () => css`
    border-radius: 50%;
  `,
  detail: () => css`
    padding-left: 60px;
    height: 120px;
  `,
  name: () => css`
    font-size: 24px;
    vertical-align: top;
    height: 30px;
    font-weight: bold;
  `,
  number: () => css`
    font-size: 14px;
    height: 14px;
    margin-top: 5px;
    color: #999;
  `,
  icon: () => css`
    position: relative;
    width: 20px;
    height: 20px;
  `,
  button: () => css`
    display: flex;
    background-color: white;
    border: 2px solid #5b3c34;
    border-radius: 4px;
    color: #5b3c34;
    padding: 8px 16px;
    margin-top: 10px;
    &:hover {
      cursor: pointer;
    }
  `,
  text: () => css`
    padding-left: 4px;
    font-weight: bold;
    font-size: 14px;
  `,
  userInfo: () => css`
    font-size: 16px;
    height: 16px;
    margin-top: 5px;
    color: #333;
  `,
})
