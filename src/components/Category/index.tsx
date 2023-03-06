import React from 'react'
import { styles } from './styles'

export const Category: React.FC = () => {
  return (
    <>
      <div css={styles.container}>
        <h3 css={styles.title}>カテゴリー</h3>
        <ul css={styles.ul}>
          <li css={styles.li}>トップス</li>
          <li css={styles.li}>ジャケット / アウター</li>
          <li css={styles.li}>パンツ</li>
          <li css={styles.li}>オールインワン</li>
          <li css={styles.li}>スカート</li>
          <li css={styles.li}>ワンピース/ドレス</li>
          <li css={styles.li}>スーツ</li>
          <li css={styles.li}>バッグ</li>
          <li css={styles.li}>シューズ</li>
          <li css={styles.li}>ファッション雑貨 / 小物</li>
        </ul>
      </div>
    </>
  )
}
