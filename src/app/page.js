import Demo from '@/components/landingPage/demo'
import Features from '@/components/landingPage/features'
import Footer from '@/components/landingPage/footer'
import Header from '@/components/landingPage/header'
import Hero from '@/components/landingPage/hero'
import Loading from '@/components/landingPage/loading'
import Pricing from '@/components/landingPage/pricing'
import Technologies from '@/components/landingPage/technologies'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <Features/>
      <Demo />
      <Loading/>
      <Pricing />
      <Footer />
    </>
  )
}

export default Home