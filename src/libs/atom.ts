import { atom } from 'jotai'
import { User } from 'src/types'

export const userData = atom<User>({
  uid: 'RXOjuotqX8P2jLNZ7PMIPRssO0e2',
  name: '',
  gender: '',
  height: '',
  style: '',
  introduce: '',
  posts: [
    {
      item: '',
      bland: '',
      detail: '',
      category: '',
      want: '',
    },
  ],
})

export const postsData = atom({
  // uid: '',
  item: '',
  bland: '',
  detail: '',
  category: '',
  want: '',
})
