import React from 'react'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { ItemDescription } from 'src/components/ItemDescription'
import { LoginHeader } from 'src/components/LoginHeader'
import { SuggestedItems } from 'src/components/SuggestedItems'
import { containerStyles } from './styles'

const PostDetail: React.FC = () => {
  return (
    <div>
      <LoginHeader />
      <div css={containerStyles.container}>
        <Category />
        <div>
          <ItemDescription
            bland="NIKE"
            item="カーディガン"
            text="ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。ここに文が入ります。"
            category="トップス"
            want="スラックス"
          />
          <SuggestedItems />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostDetail
