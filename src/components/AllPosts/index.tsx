import { doc, getDoc } from 'firebase/firestore'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { db } from 'src/firebase/firebase'
import { userData } from 'src/libs/atom'
import { User } from 'src/types'
import { Postcard } from '../Postcard'
import { styles } from './styles'

export const AllPosts: React.FC = () => {
  const [user, setUser] = useAtom(userData)

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data() as User
        setUser(data)
      } else {
        alert('データが存在しません。')
      }
    }
    getData()
  }, [])

  return (
    <div css={styles.container}>
      {user.posts.map((post, index) => {
        return (
          <Postcard
            width="three"
            height="three"
            bland={post.bland}
            item={post.item}
            want={post.want}
            category={post.bland}
            key={index}
          />
        )
      })}
    </div>
  )
}
