import Image from 'next/image'
import React from 'react'
import imageSrc from '../photos/camera.png'
import {
  boxStyles,
  getShapeStyle,
  imageStyles,
  inputStyles,
  optionStyles,
  textStyles,
} from './styles'

type Props = {
  shape: string
}

export const PostImage: React.FC<Props> = (props) => {
  const { shape } = props
  return (
    <>
      <label>
        <div css={getShapeStyle(shape)}>
          <input type="file" css={inputStyles.input} />
          <div css={boxStyles.box}>
            <div css={imageStyles.image}>
              <Image src={imageSrc} fill alt="写真追加" />
            </div>
            <p css={textStyles.text}>画像を選択する</p>
          </div>
          <p css={optionStyles.option}>またはドロップ＆キック</p>
        </div>
      </label>
    </>
  )
}
