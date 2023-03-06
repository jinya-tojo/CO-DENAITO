import React from 'react'
import { styles } from './styles'

export const Footer: React.FC = () => {
  return (
    <footer css={styles.footer}>
      <div css={styles.imageBox}>
        <img css={styles.image} src="logo-codenaito.png" alt="ロゴ画像" />
      </div>
    </footer>
  )
}
