import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import React, { useId, useState } from 'react'
import { Button } from 'src/components/Button/Index'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { PostImage } from 'src/components/PostImage'
import { SelectCategory } from 'src/components/SelectCategory'
import { TextInput } from 'src/components/TextInput'
import { db } from 'src/firebase/firebase'
import { userData } from 'src/libs/atom'
import { containerStyles, inputsStyles, submitStyles } from './styles'
import { collection, addDoc } from 'firebase/firestore'

const Post: React.FC = () => {
  const [item, setItem] = useState('')
  const [bland, setBland] = useState('')
  const [detail, setDetail] = useState('')
  const [category, setCategory] = useState('')
  console.log(category)
  const [want, setWant] = useState('')
  const [user, setUser] = useAtom(userData)
  const router = useRouter()
  const id = useId()
  console.log(id)

  const docRef = doc(db, 'users', user.uid)
  const submit = async () => {
    await updateDoc(docRef, {
      posts: arrayUnion({
        item: item,
        bland: bland,
        detail: detail,
        category: category,
        want: want,
      }),
    })
    setUser({
      ...user,
      posts: [
        {
          item: item,
          bland: bland,
          detail: detail,
          category: category,
          want: want,
        },
      ],
    })
    await setDoc(doc(db, 'posts', id), {
      uid: user.uid,
      item: item,
      bland: bland,
      detail: detail,
      category: category,
      want: want,
    })
    router.push('/home')
  }

  return (
    <div>
      <LoginHeader />
      <div css={containerStyles.container}>
        <Category />
        <div css={inputsStyles.inputs}>
          <PostImage shape="box" tag="yes" label="yes" />
          <TextInput
            tag="yes"
            width="long"
            size="big"
            label="アイテム名"
            onChange={(v: string) => setItem(v)}
          />
          <TextInput
            tag="yes"
            width="long"
            size="small"
            label="ブランド名"
            onChange={(v: string) => setBland(v)}
          />
          <SelectCategory
            value={category}
            onChange={(v: string) => setCategory(v)}
          />
          <TextInput
            tag="yes"
            width="long"
            size="small"
            label="アイテムの説明"
            onChange={(v: string) => setDetail(v)}
          />
          <TextInput
            tag="yes"
            width="long"
            size="small"
            label="欲しいアイテム"
            onChange={(v: string) => setWant(v)}
          />
          <div css={submitStyles.submit}>
            <Button backgroundColor="blown" text="投稿する" onClick={submit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Post
