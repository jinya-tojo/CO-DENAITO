import Image from 'next/image'
import Link from 'next/link'
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
  userInfoStyles,
} from './styles'

type UserDetailProps = {
  name: string
  gender: string
  height: string
  style: string
  postNumber: number
}

export const UserDetail: React.FC<UserDetailProps> = (props) => {
  const { name, postNumber, gender, height, style } = props

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
        <p css={nameStyles.name}>{name}</p>
        <p
          css={userInfoStyles.userInfo}
        >{`${height} / ${gender} / ${style}`}</p>
        <p css={numberStyles.number}>{`投稿${postNumber}件`}</p>
        <Link href="/edit-user">
          <button css={buttonStyles.button}>
            <div css={iconStyles.icon}>
              <Image src={pencilIconSrc} fill alt="編集アイコン" />
            </div>
            <p css={textStyles.text}>プロフィールを編集</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
