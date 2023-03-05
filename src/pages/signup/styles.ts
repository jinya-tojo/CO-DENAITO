import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'

export const containerStyles = makeStyles({
  container: () => css`
    padding: 160px 0;
    width: 400px;
    margin: 0 auto;
  `,
})

export const imageStyles = makeStyles({
  icon: () => css`
    margin: 0 auto;
    margin-bottom: 50px;
    position: relative;
    width: 315px;
    height: 40px;
    text-align: center;
  `,
})

export const PostImageStyles = makeStyles({
  image: () => css`
    margin-left: 100px;
  `,
})

export const signupButtonStyles = makeStyles({
  signup: () => css`
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
  `,
})
