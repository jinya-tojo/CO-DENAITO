import React from 'react'
import { styles } from './styles'

type SuggestToProps = {
  bland: string
  item: string
  category: string
}

export const SuggestTo: React.FC<SuggestToProps> = (props) => {
  const { bland, item, category } = props
  return (
    <>
      <div css={styles.box}>
        <p css={styles.title}>おすすめ先のアイテム</p>
        <div css={styles.container}>
          <div css={styles.image}>
            <img src="sampleClothe.jpeg" alt="投稿画像" />
          </div>
          <div>
            <p css={styles.bland}>{bland}</p>
            <p css={styles.item}>{item}</p>
            <p css={styles.category}>{category}</p>
          </div>
        </div>
      </div>
    </>
  )
}
