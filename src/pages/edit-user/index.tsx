import React, { useState } from 'react'
import { Button } from 'src/components/Button/Index'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { PostImage } from 'src/components/PostImage'
import { TextInput } from 'src/components/TextInput'
import {
  cancelStyles,
  completeStyles,
  containerStyles,
  imageStyles,
  inputsStyles,
} from './styles'

const EditUser: React.FC = () => {
  const onClickButton = () => {
    alert('')
  }
  const [name, setName] = useState('')
  return (
    <>
      <LoginHeader />
      <div css={containerStyles.container}>
        <Category />
        <div css={inputsStyles.inputs}>
          <div css={imageStyles.image}>
            <PostImage shape="circle" tag="no" label="no" />
          </div>
          <TextInput
            tag="no"
            width="short"
            size="small"
            label="名前"
            onChange={(v: string) => setName(v)}
          />
          <div css={completeStyles.complete}>
            <Button
              backgroundColor="blown"
              text="完了する"
              onClick={onClickButton}
            />
          </div>
          <div css={cancelStyles.cancel}>
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
