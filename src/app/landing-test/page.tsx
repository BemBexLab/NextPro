import Hero from './components/Hero'
import HalloweenHeader from '@/components/sections/headers/HalloweenHeader'
import InfiniteLogoSlider from './components/InfiniteLogoSlider'
import Services from './components/Service'

export default function Page() {
  return (
    <>
      <HalloweenHeader haveShadow={undefined} />
      <section
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/image%2032.jpg')",
        }}
      >
        <Hero />
      </section>
      <InfiniteLogoSlider />
      <Services />
    </>
  )
}
