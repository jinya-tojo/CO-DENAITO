import React from 'react'
import Image from 'next/image'
import imageSrc from '../photos/sampleClothe.jpeg'
import iconSrc from '../photos/addIcon3x.png'
import {
  styles,
  getSizeStyle,
  getImageSizeStyle,
  itemStyles,
  categoryStyles,
  iconStyles,
  iconWithWantStyles,
  wantStyles,
} from './styles'
import Link from 'next/link'

type PostcardProps = {
  width: string
  height: string
  bland: string
  item: string
  want: string
  category: string
}

export const Postcard: React.FC<PostcardProps> = (props) => {
  const { width, height, bland, item, want, category } = props

  return (
    <>
      <Link href="/postdetail">
        <div css={getSizeStyle(width)}>
          <div css={getImageSizeStyle(height)}>
            <Image src={imageSrc} fill alt="投稿画像" />
          </div>
          <div>
            <p css={styles.bland}>{bland}</p>
            <p css={itemStyles.item}>{item}</p>
            <div css={iconWithWantStyles.iconWithWant}>
              <div css={iconStyles.icon}>
                <Image src={iconSrc} fill alt="addアイコン" />
              </div>
              <p css={wantStyles.want}>{want}</p>
            </div>

            <p css={categoryStyles.category}>{category}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
