import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button } from 'src/components/Button/Index'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { PostImage } from 'src/components/PostImage'
import { SelectCategory } from 'src/components/SelectCategory'
import { SuggestTo } from 'src/components/SuggestTo'
import { TextInput } from 'src/components/TextInput'
import { styles } from '../../styles/suggestStyles'

const Suggest: React.FC = () => {
  const [item, setItem] = useState('')
  const [bland, setBland] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const router = useRouter()

  const onClickButton = () => {
    router.push('/postDetail')
  }

  return (
    <div>
      <LoginHeader />
      <div css={styles.container}>
        <Category />
        <div css={styles.inputs}>
          <SuggestTo bland="NIKE" item="カーディガン" category="トップス" />
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
            size="big"
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
            size="big"
            label="アイテムの説明"
            value={text}
            onChange={(v: string) => setText(v)}
          />
          <div css={styles.button}>
            <Button
              backgroundColor="blown"
              text="おすすめする"
              onClick={onClickButton}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Suggest
