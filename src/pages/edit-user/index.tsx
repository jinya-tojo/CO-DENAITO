import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button } from 'src/components/Button/Index'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { PostImage } from 'src/components/PostImage'
import { TextInput } from 'src/components/TextInput'
import { styles } from '../../styles/edit-userStyles'

const EditUser: React.FC = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [height, setHeight] = useState('')
  const [style, setStyle] = useState('')
  const router = useRouter()

  const onClickButton = () => {
    router.push('/myPage')
  }
  return (
    <>
      <LoginHeader />
      <div css={styles.container}>
        <Category />
        <div css={styles.inputs}>
          <div css={styles.image}>
            <PostImage shape="circle" tag="no" label="no" />
          </div>
          <TextInput
            tag="no"
            width="short"
            size="small"
            label="名前"
            value={name}
            onChange={(v: string) => setName(v)}
          />
          <TextInput
            tag="no"
            width="short"
            size="small"
            label="性別"
            value={gender}
            onChange={(v: string) => setGender(v)}
          />
          <TextInput
            tag="no"
            width="short"
            size="small"
            label="身長"
            value={height}
            onChange={(v: string) => setHeight(v)}
          />
          <TextInput
            tag="no"
            width="short"
            size="small"
            label="好きなスタイル"
            value={style}
            onChange={(v: string) => setStyle(v)}
          />
          <div css={styles.complete}>
            <Button
              backgroundColor="blown"
              text="完了する"
              onClick={onClickButton}
            />
          </div>
          <div css={styles.cancel}>
            <Button
              backgroundColor="gray"
              text="キャンセル"
              onClick={onClickButton}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditUser
