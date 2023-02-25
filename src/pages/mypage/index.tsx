import React from 'react'
import { AllPosts } from 'src/components/AllPosts'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { TabChange } from 'src/components/TabChange'
import { UserDetail } from 'src/components/UserDetail'
import { myinfoStyles } from './styles'

const Mypage: React.FC = () => {
  return (
    <div>
      <LoginHeader />
      <div css={myinfoStyles.myinfo}>
        <Category />
        <div>
          <UserDetail userName="カワイユキ" postNumber={35} />
          <TabChange />
          <AllPosts />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mypage
