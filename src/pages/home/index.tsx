import React from 'react'
import { AllPosts } from 'src/components/AllPosts'
import { Category } from 'src/components/Category'
import { Footer } from 'src/components/Footer'
import { LoginHeader } from 'src/components/LoginHeader'
import { containerStyles } from './styles'

const Home: React.FC = () => {
  return (
    <div>
      <LoginHeader />
      <div css={containerStyles.container}>
        <Category />
        <AllPosts />
      </div>
      <Footer />
    </div>
  )
}

export default Home
