import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const getShapeStyle = (shape: string) => {
  switch (shape) {
    case 'box':
      return css`
        width: 600px;
        height: 120px;
        border: 1px dashed #d9d9d9;
        padding-top: 29px;
        margin-bottom: 30px;
        &:hover {
          cursor: pointer;
        }
      `
    case 'circle':
      return css`
        width: 198px;
        height: 198px;
        border: 1px dashed #d9d9d9;
        border-radius: 50%;
        padding-top: 69px;
        margin-bottom: 50px;
        &:hover {
          cursor: pointer;
        }
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

export const getLabelStyle = (label: string) => {
  switch (label) {
    case 'yes':
      return css`
        font-size: 14px;
        font-weight: bold;
        padding-right: 10px;
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
  tag: () => css`
    font-size: 10px;
    color: white;
    background-color: #c93434;
    padding: 2px 4px;
    font-weight: bold;
    margin-bottom: 3px;
  `,
  input: () => css`
    display: none;
  `,
  box: () => css`
    display: flex;
    border: 2px solid #5b3c34;
    border-radius: 4px;
    width: 152px;
    height: 34px;
    padding: 5px 14px;
    margin: 0 auto;
    vertical-align: middle;
  `,
  image: () => css`
    width: 18px;
    height: 18px;
    position: relative;
    margin-top: 2px;
    margin-right: 4px;
  `,
  text: () => css`
    font-size: 14px;
    color: #5b3c34;
    font-weight: bold;
  `,
  option: () => css`
    font-size: 12px;
    color: #5b3c34;
    padding-top: 10px;
    text-align: center;
  `,
})
