import React from 'react'
import Image from 'next/image'
import { styles } from './styles'

export const Footer: React.FC = () => {
  return (
    <footer css={styles.footer}>
      <div css={styles.imageBox}>
        <Image
          css={styles.image}
          src="/logo-codenaito.png"
          alt="ロゴ画像"
          fill
        />
      </div>
    </footer>
  )
}
