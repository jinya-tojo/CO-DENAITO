import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    width: 400px;
    margin: 0 auto;
    padding-top: 160px;
  `,
  border: () => css`
    width: 400px;
    padding-bottom: 30px;
    margin-top: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #d9d9d9;
  `,
  icon: () => css`
    margin: 0 auto;
    margin-bottom: 30px;
    position: relative;
    width: 315px;
    height: 40px;
    text-align: center;
  `,
})
