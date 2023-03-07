import Image from 'next/image'
import React from 'react'
import { getLabelStyle, getShapeStyle, getTagStyle, styles } from './styles'

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
        <div css={styles.titles}>
          <p css={getLabelStyle(label)}>アイテム画像</p>
          <p css={getTagStyle(tag)}>必須</p>
        </div>
        <div css={getShapeStyle(shape)}>
          <input type="file" css={styles.input} />
          <div css={styles.box}>
            <div css={styles.image}>
              <Image src="/camera.png" alt="写真追加" fill />
            </div>
            <p css={styles.text}>画像を選択する</p>
          </div>
          <p css={styles.option}>またはドロップ＆キック</p>
        </div>
      </label>
    </>
  )
}
