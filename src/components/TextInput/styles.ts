import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const getWithStyle = (width: string) => {
  switch (width) {
    case 'long':
      return css`
        width: 600px;
        margin-bottom: 30px;
      `
    case 'short':
      return css`
        width: 400px;
      `
  }
}

export const getFontSizeStyle = (size: string) => {
  switch (size) {
    case 'big':
      return css`
        font-size: 14px;
      `
    case 'small':
      return css`
        font-size: 12px;
      `
  }
}

export const getTagStyle = (tag: string) => {
  switch (tag) {
    case 'yes':
      return css`
        font-size: 10px;
        color: white;
        background-color: #c93434;
        padding: 2px 4px;
        font-weight: bold;
        margin-bottom: 3px;
        margin-left: 10px;
      `
    case 'no':
      return css`
        display: none;
      `
  }
}

export const styles = makeStyles({
  titles: () => css`
    display: flex;
  `,
  input: () => css`
    width: 400px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 14px;
    margin-bottom: 15px;
  `,
  label: () => css`
    font-size: 12px;
    font-weight: bold;
  `,
})
