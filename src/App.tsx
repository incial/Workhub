import { AboutSection } from './components/AboutSection'
import { CtaSection } from './components/CtaSection'
import { ContactSection } from './components/ContactSection'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MoreFromIncialSection } from './components/MoreFromIncialSection'
import { CustomizeSection } from './components/CustomizeSection'
import { PricingSection } from './components/PricingSection'
import { ReviewsSection } from './components/ReviewsSection'
import { WhyWorkHubSection } from './components/WhyWorkHubSection'

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <WhyWorkHubSection />
      <PricingSection />
      <ReviewsSection />
      <CustomizeSection />
      <MoreFromIncialSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
