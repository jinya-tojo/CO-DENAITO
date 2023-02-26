import React, { useState } from 'react'
import { Button } from 'src/components/Button/Index'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { PostImage } from 'src/components/PostImage'
import { SelectCategory } from 'src/components/SelectCategory'
import { TextInput } from 'src/components/TextInput'
import { containerStyles, inputsStyles, submitStyles } from './styles'

const Post: React.FC = () => {
  const [item, setItem] = useState('')
  const [bland, setBland] = useState('')
  const [category, setCategory] = useState('')
  const [text, setText] = useState('')
  const [want, setWant] = useState('')

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
          <SelectCategory />
          <TextInput
            tag="yes"
            width="long"
            size="small"
            label="アイテムの説明"
            onChange={(v: string) => setText(v)}
          />
          <TextInput
            tag="yes"
            width="long"
            size="small"
            label="欲しいアイテム"
            onChange={(v: string) => setWant(v)}
          />
          <div css={submitStyles.submit}>
            <Button
              backgroundColor="blown"
              color="white"
              text="投稿する"
              onClick={() => alert('')}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Post
