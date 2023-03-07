import React from 'react'
import { styles } from './styles'
import Link from 'next/link'
import Image from 'next/image'

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
      <div css={styles.container}>
        <div css={styles.image}>
          <Image src="/sampleClothe.jpeg" alt="投稿画像" fill />
        </div>
        <div css={styles.description}>
          <p css={styles.bland}>{bland}</p>
          <p css={styles.item}>{item}</p>
          <p>{text}</p>
          <p css={styles.category}>{category}</p>
          <div css={styles.want}>
            <div css={styles.wantIcon}>
              <Image src="/addIcon3x.png" alt="wantアイコン" fill />
            </div>
            <p>{`欲しいアイテム : ${want}`}</p>
          </div>
          <Link href="/suggest">
            <button css={styles.button}>
              <div css={styles.addIcon}>
                <Image src="/clotheEdit.png" alt="おすすめ投稿アイコン" fill />
              </div>
              <p css={styles.suggest}>このアイテムへのおすすめを追加</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
