import { userData } from './../libs/atom'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'src/firebase/firebase'

type Props = {
  email: string
  password: string
}

export const useLogin = () => {
  const [loginUser, setLoginUser] = useAtom(userData)
  const router = useRouter()
  const login = ({ email, password }: Props) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setLoginUser({
          ...loginUser,
          uid: user.uid,
        })
        router.push('/home')
      })
      .catch((error) => {
        const errorMessage = error.message
        alert(errorMessage)
      })
  return {
    login,
  }
}
