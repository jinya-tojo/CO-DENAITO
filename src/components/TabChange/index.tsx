import { css } from '@emotion/react'
import Image from 'next/image'
import React, { useState } from 'react'
import postsAllSrc from '../photos/postsAll.png'
import suggestPostsAll from '../photos/suggestPostsAll.png'
import {
  containerStyles,
  iconWithTitle1Styles,
  iconWithTitle2Styles,
  IconStyles,
  titleStyles,
} from './styles'

// クリックするとタブのスタイル（ボーダーの太さ、色、アイコンの色、文字の太さ）が変わる処理を追加する必要がある。

export const TabChange: React.FC = () => {
  return (
    <div css={containerStyles.container}>
      <div css={iconWithTitle1Styles.iconWithTitle1}>
        <div css={IconStyles.Icon}>
          <Image src={postsAllSrc} fill alt="投稿アイテム" />
        </div>
        <p css={titleStyles.title}>投稿したアイテム</p>
      </div>
      <div css={iconWithTitle2Styles.iconWithTitle2}>
        <div css={IconStyles.Icon}>
          <Image
            style={{ color: 'pink' }}
            src={suggestPostsAll}
            fill
            alt="おすすめしたアイテム"
          />
        </div>
        <p css={titleStyles.title}>おすすめしたアイテム</p>
      </div>
    </div>
  )
}
