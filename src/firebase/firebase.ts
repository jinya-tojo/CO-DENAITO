import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()

export const db = getFirestore(app)

export const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      if (errorCode === 'auth/email-already-in-use') {
        alert('すでに登録済みのユーザーです。')
      }
    })
}

// どこを消すか、編集するかわらない
export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      // const errorMessage = error.message
      if (errorCode) {
        alert(errorCode)
      }
    })
}

// export const logout = (email: string, password: string) => {
//   signOut(auth)
//     .then(() => {})
//     .catch((error) => {
//       alert(error)
//     })
// }

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid
//   }
// })
