import { Interpolation, Theme } from '@emotion/react'

type AnyStyleDef = Record<string, Interpolation<Theme>>

/**
 * Emotion の css プロパティに渡せる型だけに限定する
 */
const makeStyles = <Obj extends AnyStyleDef>(definition: Obj): Obj => definition

export default makeStyles
