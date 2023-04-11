import {
  collection,
  Firestore,
  getDocs,
  onSnapshot,
  query,
} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AllData } from 'src/components/AllData'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { db } from 'src/firebase/firebase'
import { Post } from 'src/types'
import { styles } from '../../styles/homeStyles'
// ここから変更始めるよ
const Home: React.FC = () => {
  const [data, setData] = useState<Post[]>()

  // useEffect(() => {
  //   const posts: Post[] = []
  //   const q = query(collection(db, 'users'))
  //   onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       doc.data().posts.map((data: Post) => posts.push(data))
  //       setData(posts)
  //     })
  //   })
  // }, [])

  // useEffect(() => {
  //   const posts: Post[] = []
  //   const q = query(collection(db, 'posts'))
  //   onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       doc.data().map((data:Post) => posts.push(data))
  //       setData(posts)
  //     })
  //   })
  // }, [])

  // useEffect (() => {
  //   const posts: Post[] = []
  //   const querySnapshot = getDocs(collection(db, "posts"));
  //   querySnapshot.forEach((doc) => {
  //     doc.data().map((data:Post) => posts.push(data))
  //     setData(posts)
  //     console.log(data)
  //   });
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'))
      const postId = querySnapshot
      const fetchedPosts = querySnapshot.docs.map((doc) => doc.data()) as Post[]
      setData(fetchedPosts)
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <LoginHeader />
      <div css={styles.container}>
        <Category />
        <div css={styles.posts}>
          {data?.map((eachPost, index) => {
            return <AllData post={eachPost} key={index} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
