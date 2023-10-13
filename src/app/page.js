import Image from 'next/image'
import HeadMessage from './components/HeadMessage'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import AccountNotify from './components/AccountNotify'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#00000]">
      <Navbar/>
      <HeadMessage/>
      {/* <AccountNotify/> */}
      <Skills/>
      <AboutMe/>
    </main>
  )
}
