import { userData } from './../libs/atom'
import { useAtom } from 'jotai'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useRouter } from 'next/router'

type Props = {
  email: string
  password: string
}

export const useSignUp = () => {
  const [signupUser, setSignupUser] = useAtom(userData)
  const router = useRouter()
  const signup = ({ email, password }: Props) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setSignupUser({
          ...signupUser,
          uid: user.uid,
        })
        router.push('/signup')
      })
      .catch((error) => {
        const errorCode = error.code
        if (errorCode === 'auth/email-already-in-use') {
          alert('すでに登録済みのユーザーです。')
        }
      })
  return {
    signup,
  }
}
