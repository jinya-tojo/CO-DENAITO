import { atom } from 'jotai'
import { User } from 'src/types'

export const userData = atom<User>({
  uid: '',
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
