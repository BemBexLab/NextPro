import Header from './components/Header'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import MoreThanJustWebsite from './components/MoreThanJustWebsite'
import MostProcess from './components/MostProcess'
import PricingPackages from './components/PricingPackages'
import RecentProjects from './components/RecentProjects'

const page = () => {
  return (
    <section>
        <Header />
        <Hero />
        <OurServices />
        <MoreThanJustWebsite />
        <PricingPackages />
        <MostProcess />
        <RecentProjects />
    </section>
  )
}

export default page
