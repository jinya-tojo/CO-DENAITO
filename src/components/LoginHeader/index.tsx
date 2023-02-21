import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import iconSrc from '../photos/icon_198x278.png'
import logoSrc from '../photos/logo-codenaito.png'
import {
  buttonStyles,
  headerStyles,
  iconStyles,
  listStyles,
  logoStyles,
} from './styles'

export const LoginHeader: React.FC = () => {
  return (
    <>
      <header css={headerStyles.header}>
        <div css={logoStyles.logo}>
          <Link href="home">
            <Image src={logoSrc} fill alt="ロゴ画像" />
          </Link>
        </div>
        <div css={listStyles.list}>
          <Link href="/post">
            <button css={buttonStyles.button}>＋新規投稿</button>
          </Link>
          <div css={iconStyles.icon}>
            <Link href="/mypage">
              <Image
                style={{ borderRadius: '50%' }}
                src={iconSrc}
                fill
                alt="プロフィール画像"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
