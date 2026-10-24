import Header from './components/Header'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import MoreThanJustWebsite from './components/MoreThanJustWebsite'
import MostProcess from './components/MostProcess'
import PricingPackages from './components/PricingPackages'
import RecentProjects from './components/RecentProjects'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Popup from './components/popup'

const page = () => {
  return (
    <section className="black-friday-sale">
        <Header />
        <Hero />
        <OurServices />
        <PricingPackages />
        <MostProcess />
        <RecentProjects />
        <MoreThanJustWebsite />
        <FAQs />
        <Footer />
        <Popup />
    </section>
  )
}

export default page
