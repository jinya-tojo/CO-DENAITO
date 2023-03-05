import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AllData } from 'src/components/AllData'
import { AllPosts } from 'src/components/AllPosts'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { db } from 'src/firebase/firebase'
import { Post } from 'src/types'
import { containerStyles, postStyles } from './styles'

const Home: React.FC = () => {
  const [data, setData] = useState<Post[]>()

  useEffect(() => {
    console.log('aaa')
    const posts: Post[] = []
    const q = query(collection(db, 'users'))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.data().posts.map((data: Post) => posts.push(data))
        setData(posts)
      })
    })
  }, [])

  return (
    <div>
      <LoginHeader />
      <div css={containerStyles.container}>
        <Category />
        <div css={postStyles.posts}>
          {data?.map((eachPost, index) => {
            return (
              <AllData
                bland={eachPost.bland}
                item={eachPost.item}
                detail={eachPost.detail}
                category={eachPost.category}
                want={eachPost.want}
                key={index}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
