import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoSrc from '../photos/logo-codenaito.png'
import { headerStyles, listStyles, borderStyles, logoStyles } from './styles'

export const LogoutHeader: React.FC = () => {
  return (
    <>
      <header css={headerStyles.header}>
        <div css={logoStyles.logo}>
          <Link href="/home">
            <Image src={logoSrc} fill alt="ロゴ画像" />
          </Link>
        </div>
        <div css={listStyles.list}>
          <Link href="/login">
            <p>ログイン</p>
          </Link>
          <div css={borderStyles.border}></div>
          <p>会員登録</p>
        </div>
      </header>
    </>
  )
}
