import React from 'react'
import { Post } from 'src/types'
import { Postcard } from '../Postcard'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { postsData } from 'src/libs/atom'

type Props = {
  post: Post
}

export const AllData: React.FC<Props> = ({ post }) => {
  const [user, setUser] = useAtom(postsData)
  const ClickCard = () => {
    setUser(post)
  }
  return (
    <Link href="/postdetail" onClick={ClickCard}>
      <Postcard
        width="three"
        height="three"
        bland={post.bland}
        item={post.item}
        want={post.want}
        category={post.category}
      />
    </Link>
  )
}
