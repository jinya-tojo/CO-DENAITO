/** @jsxImportSource @emotion/react */
import { styles, containerStyles, imageStyles } from './styles'
import React, { useState } from 'react'
import Image from 'next/image'
import imageSrc from '../../components/Icon/logo-codenaito.png'
import { login, signUp } from 'src/firebase/firebase'
import { Button } from '../../components/Button/Index'
import { TextInput } from '../../components/TextInput'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')

  return (
    <>
      <div css={containerStyles.container}>
        <div css={imageStyles.icon}>
          <Image src={imageSrc} fill alt="ロゴ画像" />
        </div>
        <TextInput
          label="メールアドレス"
          onChange={(v: string) => setEmail(v)}
        />
        <TextInput label="パスワード" onChange={(v: string) => setEmail(v)} />
        <div css={styles.border}>
          <Button
            text="ログイン"
            color="white"
            backgroundColor="blown"
            onClick={() => login('poko@gmail.com', 'tojo123')}
          />
        </div>
        <Button
          text="新規会員登録"
          color="blown"
          backgroundColor="white"
          onClick={() => signUp('poko@gmail.com', 'tojo123')}
        />
      </div>
    </>
  )
}

export default Login
