export type User = {
  uid: string
  name: string
  gender: string
  height: string
  style: string
  introduce: string
  posts: Post[]
}

export type Post = {
  item: string
  bland: string
  detail: string
  category: string
  want: string
}
