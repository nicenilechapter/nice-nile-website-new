import CGPACalculator from '@/components/cgpaCalculator'
import FrequentlyAskedQuestions from '@/components/faq'
import Footer from '@/components/footer'
import AltHeroPage from '@/components/landingpage/altHeroPage'
import HeroSection from '@/components/landingpage/heroPage'
import IntroSection from '@/components/landingpage/introSection'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Navigation/>
      <AltHeroPage/>
      <IntroSection/>
      <CGPACalculator/>
      <Footer/>
    </main>
  )
}
