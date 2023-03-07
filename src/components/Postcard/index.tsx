import React from 'react'
import { getSizeStyle, getImageSizeStyle, styles } from './styles'
import Link from 'next/link'
import Image from 'next/image'

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
            <Image src="/sampleClothe.jpeg" alt="投稿画像" fill />
          </div>
          <div>
            <p css={styles.bland}>{bland}</p>
            <p css={styles.item}>{item}</p>
            <div css={styles.iconWithWant}>
              <div css={styles.icon}>
                <Image src="/addIcon3x.png" alt="addアイコン" fill />
              </div>
              <p css={styles.want}>{want}</p>
            </div>

            <p css={styles.category}>{category}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
