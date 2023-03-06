import React, { useState } from 'react'
import { Button } from 'src/components/Button/Index'
import { PostImage } from 'src/components/PostImage'
import { TextInput } from 'src/components/TextInput'
import { styles } from '../../styles/signupStyles'
import { useRouter } from 'next/router'
import { doc, setDoc } from 'firebase/firestore'
import { db } from 'src/firebase/firebase'
import { userData } from 'src/libs/atom'
import { useAtom } from 'jotai'

const Signup: React.FC = () => {
  const router = useRouter()
  const [user, setUser] = useAtom(userData)
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [height, setHeight] = useState('')
  const [style, setStyle] = useState('')
  const [introduce, setIntroduce] = useState('')

  const submit = async () => {
    if (user.uid) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: name,
        height: height,
        gender: gender,
        style: style,
        introduce: introduce,
      })
      setUser({
        ...user,
        uid: user.uid,
        name: name,
        height: height,
        gender: gender,
        style: style,
        introduce: introduce,
      })
      router.push('/home')
    } else {
      alert('再度ユーザー登録をしてください。')
      router.push('/home')
    }
  }
  return (
    <div css={styles.container}>
      <div css={styles.icon}>
        <img src="logo-codenaito.png" alt="ロゴ画像" />
      </div>
      <div css={styles.image}>
        <PostImage shape="circle" tag="no" label="no" />
      </div>

      <TextInput
        tag="no"
        width="short"
        size="small"
        label="名前"
        value={name}
        onChange={(v: string) => {
          setName(v)
        }}
      />
      <TextInput
        tag="no"
        width="short"
        size="small"
        label="性別"
        value={gender}
        onChange={(v: string) => {
          setGender(v)
        }}
      />
      <TextInput
        tag="no"
        width="short"
        size="small"
        label="身長"
        value={height}
        onChange={(v: string) => {
          setHeight(v)
        }}
      />
      <TextInput
        tag="no"
        width="short"
        size="small"
        label="系統"
        value={style}
        onChange={(v: string) => {
          setStyle(v)
        }}
      />
      <TextInput
        tag="no"
        width="short"
        size="small"
        label="自己紹介"
        value={introduce}
        onChange={(v: string) => {
          setIntroduce(v)
        }}
      />

      <Button text="ユーザー登録" backgroundColor="blown" onClick={submit} />
    </div>
  )
}

export default Signup
