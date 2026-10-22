import Header from './components/Header'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import MostProcess from './components/MostProcess'
import PricingPackages from './components/PricingPackages'
import RecentProjects from './components/RecentProjects'

const page = () => {
  return (
    <section>
        <Header />
        <Hero />
        <OurServices />
        <PricingPackages />
        <MostProcess />
        <RecentProjects />
    </section>
  )
}

export default page
