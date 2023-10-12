import Image from 'next/image'
import HeadMessage from './components/HeadMessage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#00000]">
      <HeadMessage/>
    </main>
  )
}
