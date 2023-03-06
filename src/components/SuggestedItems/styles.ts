import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    width: 960px;
    padding: 80px 80px 0 80px;
  `,
  title: () => css`
    font-size: 24px;
    color: #333;
    padding-bottom: 30px;
  `,
  items: () => css`
    display: flex;
    flex-wrap: wrap;
  `,
})
