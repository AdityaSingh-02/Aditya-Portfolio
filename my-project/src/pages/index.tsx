
import { Inter } from '@next/font/google'
import LandingPage from '@/Components/HomePage/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  )
}
