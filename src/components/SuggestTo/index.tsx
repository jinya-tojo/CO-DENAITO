import Image from 'next/image'
import React from 'react'
import imageSrc from '../photos/sampleClothe.jpeg'
import {
  blandStyles,
  boxStyles,
  categoryStyles,
  containerStyles,
  imageStyles,
  itemStyles,
  titleStyles,
} from './styles'

type SuggestToProps = {
  bland: string
  item: string
  category: string
}

export const SuggestTo: React.FC<SuggestToProps> = (props) => {
  const { bland, item, category } = props
  return (
    <>
      <div css={boxStyles.box}>
        <p css={titleStyles.title}>おすすめ先のアイテム</p>
        <div css={containerStyles.container}>
          <div css={imageStyles.image}>
            <Image src={imageSrc} fill alt="投稿画像" />
          </div>
          <div>
            <p css={blandStyles.bland}>{bland}</p>
            <p css={itemStyles.item}>{item}</p>
            <p css={categoryStyles.category}>{category}</p>
          </div>
        </div>
      </div>
    </>
  )
}
