import Head from 'next/head'
import Slider from './../comps/Slider'
import About from './../comps/About'
import SomeProjects from './../comps/SomeProjects'
import Experiences from './../comps/Experiences'
import Education from './../comps/Education'
import YoutubeChannel from './../comps/YoutubeChannel'
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
      await axios.get(`https://content-youtube.googleapis.com/youtube/v3/search?channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet&maxResults=8&key=${process.env.YT_API_KEY}&type=video`);

    const videos = resYoutube && resYoutube.data && resYoutube.data.items && resYoutube.data.items.filter(video => video.id && video.id.kind === "youtube#video");
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

      <YoutubeChannel videos={videos} />

      <SomeProjects posts={postsPerCategory[CATEGORIES.PROJECT]} />

      <Contact />

      <Footer />

    </>
  )
}
