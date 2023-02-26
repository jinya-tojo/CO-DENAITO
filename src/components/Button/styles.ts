import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const getBackgroundColorStyle = (color: string) => {
  switch (color) {
    case 'white':
      return css`
        background-color: #fff;
        color: #5b3c34;
        border: 1px solid #5b3c34;
      `
    case 'blown':
      return css`
        background-color: #5b3c34;
        color: #fff;
        border: none;
      `
    case 'gray':
      return css`
        background-color: #bbbbbb;
        color: #fff;
        border: none;
      `
  }
}

export const styles = makeStyles({
  container: () => css`
    width: 400px;
    border-radius: 4px;
    padding: 14px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  `,
})
