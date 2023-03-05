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
import { buttonStyles, containerStyles, inputsStyles } from './styles'

const Suggest: React.FC = () => {
  const [item, setItem] = useState('')
  const [bland, setBland] = useState('')
  const [text, setText] = useState('')
  const router = useRouter()

  const onClickButton = () => {
    router.push('/postdetail')
  }

  return (
    <div>
      <LoginHeader />
      <div css={containerStyles.container}>
        <Category />
        <div css={inputsStyles.inputs}>
          <SuggestTo bland="NIKE" item="カーディガン" category="トップス" />
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
            size="big"
            label="ブランド名"
            onChange={(v: string) => setItem(v)}
          />
          <SelectCategory />
          <TextInput
            tag="yes"
            width="long"
            size="big"
            label="アイテムの説明"
            onChange={(v: string) => setItem(v)}
          />
          <div css={buttonStyles.button}>
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
