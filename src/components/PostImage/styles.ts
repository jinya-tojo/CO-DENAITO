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

export const titlesStyles = makeStyles({
  titles: () => css`
    display: flex;
  `,
})

export const labelStyles = makeStyles({
  label: () => css`
    font-size: 14px;
    font-weight: bold;
    padding-right: 10px;
  `,
})

export const tagStyles = makeStyles({
  tag: () => css`
    font-size: 10px;
    color: white;
    background-color: #c93434;
    padding: 2px 4px;
    font-weight: bold;
    margin-bottom: 3px;
  `,
})

export const inputStyles = makeStyles({
  input: () => css`
    display: none;
  `,
})

export const boxStyles = makeStyles({
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
})

export const imageStyles = makeStyles({
  image: () => css`
    width: 18px;
    height: 18px;
    position: relative;
    margin-top: 2px;
    margin-right: 4px;
  `,
})

export const textStyles = makeStyles({
  text: () => css`
    font-size: 14px;
    color: #5b3c34;
    font-weight: bold;
  `,
})

export const optionStyles = makeStyles({
  option: () => css`
    font-size: 12px;
    color: #5b3c34;
    padding-top: 10px;
    text-align: center;
  `,
})
