import React from 'react'
import { Postcard } from '../Postcard'

type Props = {
  // post: Post
  item: string
  bland: string
  detail: string
  category: string
  want: string
}

export const AllData: React.FC<Props> = ({ item, bland, category, want }) => {
  // const [user, setUser] = useAtom(userData)
  return (
    <div>
      <Postcard
        width="three"
        height="three"
        bland={bland}
        item={item}
        want={want}
        category={category}
      />
    </div>
  )
}
