import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>
        CINNAMON | All software, zero bullshit.
      </title>
      <link rel="favicon" href="/favicon.ico"></link>
    </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
