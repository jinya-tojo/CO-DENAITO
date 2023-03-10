import Image from 'next/image'
import React from 'react'
import { styles } from './styles'

// クリックするとタブのスタイル（ボーダーの太さ、色、アイコンの色、文字の太さ）が変わる処理を追加する必要がある。

export const TabChange: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.iconWithTitle1}>
        <div css={styles.Icon}>
          <Image src="/postsAll.png" alt="投稿アイテム" fill />
        </div>
        <p css={styles.title}>投稿したアイテム</p>
      </div>
      <div css={styles.iconWithTitle2}>
        <div css={styles.Icon}>
          <Image
            style={{ color: 'pink' }}
            src="/suggestPostsAll.png"
            alt="おすすめしたアイテム"
            fill
          />
        </div>
        <p css={styles.title}>おすすめしたアイテム</p>
      </div>
    </div>
  )
}
