import Head from 'next/head'

import Main from '../components/Main'
import Header from 'components/Header'

const HomePage = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Header content="Header" />

    <Main title="Hello world" />
  </div>
)

export default HomePage
