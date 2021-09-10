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
import axios from 'axios'

import { computePostsByCategory, CATEGORIES } from './../utils/utils'

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.BA_DATA_URL}/posts?per_page=100`);
  // const res = await axios.get(`http://localhost:3004/posts?per_page=100`);
  
  const posts = computePostsByCategory(res.data)

  return {
    props: { postsPerCategory: posts }
  }
}

export default function Home({ postsPerCategory }) {
  
  return (
    <>
      <Head>
        <title>Mario Fornaroli Personal Site</title>
        <meta name="keywords" content="Mario Fornaroli, full stack developer, frontend developer" />
      </Head>

      <Slider posts={postsPerCategory[CATEGORIES.ABOUT_ME]} />

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
