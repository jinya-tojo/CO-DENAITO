/** @jsxImportSource @emotion/react */
import Head from 'next/head'
import Login from 'src/pages/login'

export default function Home() {
  return (
    <>
      <Head>
        <title>CO-DENAITO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  )
}
