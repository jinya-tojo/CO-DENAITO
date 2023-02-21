import React from 'react'
import { containerStyles, liStyles, titleStyles, ulStyles } from './styles'

export const Category: React.FC = () => {
  return (
    <>
      <div css={containerStyles.container}>
        <h3 css={titleStyles.title}>カテゴリー</h3>
        <ul css={ulStyles.ul}>
          <li css={liStyles.li}>トップス</li>
          <li css={liStyles.li}>ジャケット / アウター</li>
          <li css={liStyles.li}>パンツ</li>
          <li css={liStyles.li}>オールインワン</li>
          <li css={liStyles.li}>スカート</li>
          <li css={liStyles.li}>ワンピース/ドレス</li>
          <li css={liStyles.li}>スーツ</li>
          <li css={liStyles.li}>バッグ</li>
          <li css={liStyles.li}>シューズ</li>
          <li css={liStyles.li}>ファッション雑貨 / 小物</li>
        </ul>
      </div>
    </>
  )
}
