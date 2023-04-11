import { useAtom } from 'jotai'
import React from 'react'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { ItemDescription } from 'src/components/ItemDescription'
import { LoginHeader } from 'src/components/LoginHeader'
import { SuggestedItems } from 'src/components/SuggestedItems'
import { postsData } from 'src/libs/atom'
import { styles } from '../../styles/postDetailStyles'

const PostDetail: React.FC = () => {
  const [post, setPost] = useAtom(postsData)
  return (
    <div>
      <LoginHeader />
      <div css={styles.container}>
        <Category />
        <div>
          <ItemDescription
            bland={post.bland}
            item={post.item}
            text={post.detail}
            category={post.category}
            want={post.want}
          />
          <SuggestedItems />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostDetail
