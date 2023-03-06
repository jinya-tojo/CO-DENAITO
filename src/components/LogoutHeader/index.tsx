import React from 'react'
import Link from 'next/link'
import { styles } from './styles'

export const LogoutHeader: React.FC = () => {
  return (
    <>
      <header css={styles.header}>
        <div css={styles.logo}>
          <Link href="/home">
            <img src="logo-codenaito.png" alt="ロゴ画像" />
          </Link>
        </div>
        <div css={styles.list}>
          <Link href="/login">
            <p>ログイン</p>
          </Link>
          <div css={styles.border}></div>
          <p>会員登録</p>
        </div>
      </header>
    </>
  )
}
