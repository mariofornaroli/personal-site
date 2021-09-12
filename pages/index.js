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
  try {
    const res = await axios.get(`${process.env.BA_DATA_URL}/posts?per_page=100`);

    const posts = computePostsByCategory(res.data)

    return {
      props: { postsPerCategory: posts }
    }
  } catch (err) {
    console.log(err)
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

      <About posts={postsPerCategory[CATEGORIES.MY_EXPERTISE]} />

      <Services posts={postsPerCategory[CATEGORIES.JOB_EXPERIENCE]} />

      <Skills posts={postsPerCategory[CATEGORIES.MY_EXPERTISE]} />

      <Portfolio posts={postsPerCategory[CATEGORIES.PROJECT]} />

      <Testimonial posts={postsPerCategory[CATEGORIES.EDUCATION]} />

      <Blog posts={postsPerCategory[CATEGORIES.TRAINING]} />

      <Contact />

      <Footer />

    </>
  )
}
