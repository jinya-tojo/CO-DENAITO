import Image from 'next/image'
import React from 'react'
import logoSrc from '../photos/logo-codenaito.png'
import { footerStyles, imageBoxStyles, imageStyles } from './styles'

export const Footer: React.FC = () => {
  return (
    <footer css={footerStyles.footer}>
      <div css={imageBoxStyles.imageBox}>
        <Image css={imageStyles.image} src={logoSrc} fill alt="ロゴ画像" />
      </div>
    </footer>
  )
}
