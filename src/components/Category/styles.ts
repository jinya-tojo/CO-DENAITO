import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const styles = makeStyles({
  container: () => css`
    width: 320px;
    padding: 80px 80px 0 80px;
  `,
  title: () => css`
    font-size: 18px;
    font-weight: normal;
    padding-bottom: 13px;
  `,
  ul: () => css`
    list-style: none;
    font-size: 14px;
  `,
  li: () => css`
    padding-bottom: 9px;
    &:hover {
      cursor: pointer;
    }
  `,
})
