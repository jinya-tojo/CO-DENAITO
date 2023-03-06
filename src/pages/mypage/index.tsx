import { doc, getDoc } from 'firebase/firestore'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { AllPosts } from 'src/components/AllPosts'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { TabChange } from 'src/components/TabChange'
import { UserDetail } from 'src/components/UserDetail'
import { db } from 'src/firebase/firebase'
import { userData } from 'src/libs/atom'
import { User } from 'src/types'
import { styles } from '../../styles/myInfoStyles'

const Mypage: React.FC = () => {
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
    <div>
      <LoginHeader />
      <div css={styles.myInfo}>
        <Category />
        <div>
          <UserDetail
            name={user?.name}
            gender={user?.gender}
            height={user?.height}
            style={user?.style}
            postNumber={user?.posts.length}
          />
          <TabChange />
          <AllPosts />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mypage
