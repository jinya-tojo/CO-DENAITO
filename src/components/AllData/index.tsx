import { doc, DocumentData, getDoc, query } from 'firebase/firestore'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { db } from 'src/firebase/firebase'
import { userData } from 'src/libs/atom'
import { Post, User } from 'src/types'
import { Postcard } from '../Postcard'
import { collection, onSnapshot } from 'firebase/firestore'

type Props = {
  // post: Post
  item: string
  bland: string
  detail: string
  category: string
  want: string
}

export const AllData: React.FC<Props> = ({
  item,
  bland,
  detail,
  category,
  want,
}) => {
  // const [user, setUser] = useAtom(userData)
  return (
    <div>
      <Postcard
        width="three"
        height="three"
        bland={bland}
        item={item}
        want={want}
        category={bland}
      />
    </div>
  )
}
