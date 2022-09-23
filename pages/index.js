import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'


export default function Home() {
  return (
    <div className=' bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/insta-logo.png" />
      </Head>
      <Modal/>
      <Header/> 
      <Feed/>    
    </div>
      
  )
}
