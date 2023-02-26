import { css } from '@emotion/react'
import makeStyles from 'src/styles/makeStyles'
import { measureMemory } from 'vm'

export const containerStyles = makeStyles({
  container: () => css`
    display: flex;
    width: 1280px;
    margin: 0 auto;
    padding-bottom: 150px;
  `,
})

export const inputsStyles = makeStyles({
  inputs: () => css`
    padding-top: 80px;
    margin: 0 auto;
  `,
})

export const imageStyles = makeStyles({
  image: () => css`
    margin-left: 100px;
  `,
})

export const completeStyles = makeStyles({
  complete: () => css`
    padding-top: 70px;
  `,
})

export const cancelStyles = makeStyles({
  cancel: () => css`
    padding-top: 20px;
  `,
})
