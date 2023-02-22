import Image from 'next/image'
import React from 'react'
import profileImageSrc from '../photos/icon_198x278.png'
import pencilIconSrc from '../photos/pencil.png'
import {
  buttonStyles,
  containerStyles,
  detailStyles,
  iconStyles,
  imageBoxStyles,
  imageStyles,
  nameStyles,
  numberStyles,
  textStyles,
} from './styles'

type UserDetailProps = {
  userName: string
  postNumber: number
}

export const UserDetail: React.FC<UserDetailProps> = (props) => {
  const { userName, postNumber } = props
  return (
    <div css={containerStyles.container}>
      <div>
        <div css={imageBoxStyles.imageBox}>
          <Image
            css={imageStyles.image}
            src={profileImageSrc}
            fill
            alt="ユーザーアイコン画像"
          />
        </div>
      </div>
      <div css={detailStyles.detail}>
        <p css={nameStyles.name}>{userName}</p>
        <p css={numberStyles.number}>{`投稿${postNumber}件`}</p>
        <button css={buttonStyles.button}>
          <div css={iconStyles.icon}>
            <Image src={pencilIconSrc} fill alt="編集アイコン" />
          </div>
          <p css={textStyles.text}>プロフィールを編集</p>
        </button>
      </div>
    </div>
  )
}
