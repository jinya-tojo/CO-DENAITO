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
import { postsData, userData } from 'src/libs/atom'
import { styles } from '../../styles/postStyles'

const Post: React.FC = () => {
  const [item, setItem] = useState('')
  const [bland, setBland] = useState('')
  const [detail, setDetail] = useState('')
  const [category, setCategory] = useState('')
  const [want, setWant] = useState('')
  const [user, setUser] = useAtom(userData)
  // ここから変更してみるよ
  const [post, setPost] = useAtom(postsData)
  const router = useRouter()
  const id = useId()

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
    setPost({
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
      <div css={styles.container}>
        <Category />
        <div css={styles.inputs}>
          <PostImage shape="box" tag="yes" label="yes" />
          <TextInput
            tag="yes"
            width="long"
            size="big"
            label="アイテム名"
            value={item}
            onChange={(v: string) => setItem(v)}
          />
          <TextInput
            tag="yes"
            width="long"
            size="small"
            label="ブランド名"
            value={bland}
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
            value={detail}
            onChange={(v: string) => setDetail(v)}
          />
          <TextInput
            tag="yes"
            width="long"
            size="small"
            label="欲しいアイテム"
            value={want}
            onChange={(v: string) => setWant(v)}
          />
          <div css={styles.submit}>
            <Button backgroundColor="blown" text="投稿する" onClick={submit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Post
