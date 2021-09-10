import Head from 'next/head'
import Slider from './../comps/Slider'
import About from './../comps/About'
import Services from './../comps/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mario Fornaroli Personal Site</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <Slider />

      <About />

      <Services />

    </>
  )
}
