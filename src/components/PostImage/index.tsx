import Image from 'next/image'
import React from 'react'
import imageSrc from '../photos/camera.png'
import {
  boxStyles,
  getLabelStyle,
  getShapeStyle,
  getTagStyle,
  imageStyles,
  inputStyles,
  optionStyles,
  textStyles,
  titlesStyles,
} from './styles'

type Props = {
  shape: string
  tag: string
  label: string
}

export const PostImage: React.FC<Props> = (props) => {
  const { shape, tag, label } = props
  return (
    <>
      <label>
        <div css={titlesStyles.titles}>
          <p css={getLabelStyle(label)}>アイテム画像</p>
          <p css={getTagStyle(tag)}>必須</p>
        </div>
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
