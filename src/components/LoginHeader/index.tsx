import React from 'react'
import Link from 'next/link'
import { styles } from './styles'

export const LoginHeader: React.FC = () => {
  return (
    <>
      <header css={styles.header}>
        <div css={styles.logo}>
          <Link href="home">
            <img src="logo-codenaito.png" alt="ロゴ画像" />
          </Link>
        </div>
        <div css={styles.list}>
          <Link href="/post">
            <button css={styles.button}>＋新規投稿</button>
          </Link>
          <div css={styles.icon}>
            <Link href="/myPage">
              <img
                style={{ borderRadius: '50%' }}
                src="icon_198x278.png"
                alt="プロフィール画像"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
