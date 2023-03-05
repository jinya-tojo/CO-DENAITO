/** @jsxImportSource @emotion/react */
import { styles, containerStyles, imageStyles } from './styles'
import React, { useState } from 'react'
import Image from 'next/image'
import imageSrc from '../../components/photos/logo-codenaito.png'
import { login } from 'src/firebase/firebase'
import { Button } from '../../components/Button/Index'
import { TextInput } from '../../components/TextInput'
import { useLogin } from 'src/hooks/useLogin'
import { useRouter } from 'next/router'
import { useSignUp } from 'src/hooks/useSignUp'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const user = FirebaseAuth.getInstance().getCurrentUser();

  const { login } = useLogin()
  const { signup } = useSignUp()
  const router = useRouter()

  return (
    <>
      <div css={containerStyles.container}>
        <div css={imageStyles.icon}>
          <Image src={imageSrc} fill alt="ロゴ画像" />
        </div>
        <TextInput
          tag="no"
          width="short"
          size="small"
          label="メールアドレス"
          onChange={(v: string) => {
            setEmail(v)
          }}
        />
        <TextInput
          tag="no"
          width="short"
          size="small"
          label="パスワード"
          onChange={(v: string) => {
            setPassword(v)
          }}
        />
        <div css={styles.border}>
          <Button
            text="ログイン"
            backgroundColor="blown"
            onClick={() => login({ email, password })}
          />
        </div>
        <Button
          text="新規会員登録"
          backgroundColor="white"
          onClick={() => signup({ email, password })}
        />
      </div>
    </>
  )
}

export default Login
