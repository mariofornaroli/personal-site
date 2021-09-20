import Head from 'next/head'
import Slider from './../comps/Slider'
import About from './../comps/About'
import Skills from './../comps/Skills'
import Services from './../comps/Services'
import SomeProjects from './../comps/SomeProjects'
import Experiences from './../comps/Experiences'
import Education from './../comps/Education'
import YoutubeChannel from './../comps/YoutubeChannel'
import Portfolio from './../comps/Portfolio'
import Testimonial from './../comps/Testimonial'
import RecentArticles from '../comps/RecentArticles'
import Contact from './../comps/Contact'
import Footer from './../comps/Footer'
import axios from 'axios'
import mockedYtApiResult from "./../mock-http/mock_yt_videos"

import { computePostsByCategory, CATEGORIES, getSinglePostsPerCategory } from './../utils/utils'

export const getStaticProps = async () => {
  try {
    // Site data from CMS
    const resCms = await axios.get(`${process.env.BA_DATA_URL}/posts?per_page=100`);
    const posts = computePostsByCategory(resCms.data)

    // Videos from Youtube api
    const resYoutube = (!!process.env.MOCK_YT_API) ?
      await Promise.resolve(mockedYtApiResult) :
      await axios.get(`https://content-youtube.googleapis.com/youtube/v3/search?channelId=${process.env.YT_CHANNEL_ID}&part=snippet&maxResults=20&key=${process.env.YT_API_KEY}`);

    const videos = resYoutube && resYoutube.data && resYoutube.data.items;
    return {
      props: {
        postsPerCategory: posts,
        videos
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export default function Home({ postsPerCategory, videos }) {

  return (
    <>
      <Head>
        <title>Mario Fornaroli Personal Site</title>
        <meta name="keywords" content="Mario Fornaroli, full stack developer, frontend developer" />
      </Head>

      <Slider
        aboutMe={getSinglePostsPerCategory(postsPerCategory, CATEGORIES.ABOUT_ME)}
      />

      <About
        myExpertise={getSinglePostsPerCategory(postsPerCategory, CATEGORIES.MY_EXPERTISE)}
        aboutMe={getSinglePostsPerCategory(postsPerCategory, CATEGORIES.ABOUT_ME)} />


      <Experiences posts={postsPerCategory[CATEGORIES.JOB_EXPERIENCE]} />

      <Education posts={postsPerCategory[CATEGORIES.EDUCATION]}
        languages={postsPerCategory[CATEGORIES.LANGUAGE]} />

      <Portfolio posts={postsPerCategory[CATEGORIES.PROJECT]} />

      <Testimonial posts={postsPerCategory[CATEGORIES.EDUCATION]} />

      <YoutubeChannel videos={videos} />
      <Services posts={postsPerCategory[CATEGORIES.JOB_EXPERIENCE]} />

      <Skills posts={postsPerCategory[CATEGORIES.MY_EXPERTISE]} />

      <RecentArticles posts={postsPerCategory[CATEGORIES.TRAINING]} />

      <SomeProjects posts={postsPerCategory[CATEGORIES.PROJECT]} />

      <Contact />

      <Footer />

    </>
  )
}
