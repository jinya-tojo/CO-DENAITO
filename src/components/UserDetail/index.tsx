import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { styles } from './styles'

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
    <div css={styles.container}>
      <div>
        <div css={styles.imageBox}>
          <Image
            css={styles.image}
            src="/icon_198x278.png"
            alt="ユーザーアイコン画像"
            fill
          />
        </div>
      </div>
      <div css={styles.detail}>
        <p css={styles.name}>{name}</p>
        <p css={styles.userInfo}>{`${height} / ${gender} / ${style}`}</p>
        <p css={styles.number}>{`投稿${postNumber}件`}</p>
        <Link href="/edit-user">
          <button css={styles.button}>
            <div css={styles.icon}>
              <Image src="/pencil.png" alt="編集アイコン" fill />
            </div>
            <p css={styles.text}>プロフィールを編集</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
