import React from 'react'
import Image from 'next/image'
import imageSrc from '../photos/sampleClothe.jpeg'
import wantIconSrc from '../photos/addIcon3x.png'
import clothesEditIconSrc from '../photos/clotheEdit.png'
import {
  addIconStyles,
  blandStyles,
  buttonStyles,
  categoryStyles,
  containerStyle,
  descriptionStyles,
  itemImageStyles,
  itemStyles,
  suggestStyles,
  wantIconStyles,
  wantStyles,
} from './styles'
import Link from 'next/link'

type ItemDescriptionProps = {
  bland: string
  item: string
  text: string
  category: string
  want: string
}

export const ItemDescription: React.FC<ItemDescriptionProps> = (props) => {
  const { bland, item, text, category, want } = props
  return (
    <>
      <div css={containerStyle.container}>
        <div css={itemImageStyles.image}>
          <Image src={imageSrc} fill alt="投稿画像" />
        </div>
        <div css={descriptionStyles.description}>
          <p css={blandStyles.bland}>{bland}</p>
          <p css={itemStyles.item}>{item}</p>
          <p>{text}</p>
          <p css={categoryStyles.category}>{category}</p>
          <div css={wantStyles.want}>
            <div css={wantIconStyles.wantIcon}>
              <Image src={wantIconSrc} fill alt="wantアイコン" />
            </div>
            <p>{`欲しいアイテム : ${want}`}</p>
          </div>
          <Link href="/suggest">
            <button css={buttonStyles.button}>
              <div css={addIconStyles.addIcon}>
                <Image
                  src={clothesEditIconSrc}
                  fill
                  alt="おすすめ投稿アイコン"
                />
              </div>
              <p css={suggestStyles.suggest}>このアイテムへのおすすめを追加</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
