import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Client Boilerplate</title>
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default App
