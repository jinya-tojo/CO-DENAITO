import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const getSizeStyle = (width: string) => {
  switch (width) {
    case 'three':
      return css`
        width: 240px;
        height: 380px;
        margin-right: 40px;
        margin-bottom: 40px;
      `
    case 'four':
      return css`
        width: 180px;
        height: 284px;
        margin-right: 20px;
        margin-bottom: 70px;
      `
  }
}

export const getImageSizeStyle = (height: string) => {
  switch (height) {
    case 'three':
      return css`
        width: 240px;
        height: 280px;
        position: relative;
      `
    case 'four':
      return css`
        width: 180px;
        height: 210px;
        position: relative;
      `
  }
}

export const imageStyles = makeStyles({
  photo: () => css`
    width: 100%;
    height: 40px;
  `,
})

export const styles = makeStyles({
  bland: () => css`
    color: #999;
    font-size: 10px;
  `,
})

export const itemStyles = makeStyles({
  item: () => css`
    font-size: 16px;
    color: #333;
  `,
})

export const iconWithWantStyles = makeStyles({
  iconWithWant: () => css`
    display: flex;
    padding-bottom: 5px;
  `,
})

export const iconStyles = makeStyles({
  icon: () => css`
    position: relative;
    width: 18px;
    height: 18px;
  `,
})

export const wantStyles = makeStyles({
  want: () => css`
    font-size: 12px;
    color: #333;
    line-height: 18px;
    padding-left: 5px;
  `,
})

export const categoryStyles = makeStyles({
  category: () => css`
    color: white;
    border-radius: 2px;
    font-size: 12px;
    padding: 4px 8px;
    background-color: #c27021;
    display: inline-block;
  `,
})
