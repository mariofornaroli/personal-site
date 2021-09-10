import Head from 'next/head'
import Slider from './../comps/Slider'
import About from './../comps/About'
import Services from './../comps/Services'
import Skills from './../comps/Skills'
import Portfolio from './../comps/Portfolio'
import Testimonial from './../comps/Testimonial'
import Blog from './../comps/Blog'
import Contact from './../comps/Contact'
import Footer from './../comps/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mario Fornaroli Personal Site</title>
        <meta name="keywords" content="Mario Fornaroli, full stack developer, frontend developer" />
      </Head>

      <Slider />

      <About />

      <Services />

      <Skills />

      <Portfolio />

      <Testimonial />

      <Blog />

      <Contact />

      <Footer />

    </>
  )
}
