import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const getBackgroundColorStyle = (color: string) => {
  switch (color) {
    case 'white':
      return css`
        background-color: #fff;
      `
    case 'blown':
      return css`
        background-color: #5b3c34;
      `
  }
}

export const getColorStyle = (color: string) => {
  switch (color) {
    case 'white':
      return css`
        color: #fff;
      `
    case 'blown':
      return css`
        color: #5b3c34;
      `
  }
}

export const styles = makeStyles({
  container: () => css`
    width: 400px;
    border: 1px solid #5b3c34;
    border-radius: 4px;
    padding: 14px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  `,
})
