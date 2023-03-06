/** @jsxImportSource @emotion/react */
import { styles } from '../../styles/loginStyles'
import React, { useState } from 'react'
import { Button } from '../../components/Button/Index'
import { TextInput } from '../../components/TextInput'
import { useLogin } from 'src/hooks/useLogin'
import { useSignUp } from 'src/hooks/useSignUp'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useLogin()
  const { signup } = useSignUp()

  return (
    <>
      <div css={styles.container}>
        <div css={styles.icon}>
          <img src="logo-codenaito.png" alt="ロゴ画像" />
        </div>
        <TextInput
          tag="no"
          width="short"
          size="small"
          label="メールアドレス"
          value={email}
          onChange={(v: string) => {
            setEmail(v)
          }}
        />
        <TextInput
          tag="no"
          width="short"
          size="small"
          label="パスワード"
          value={password}
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
