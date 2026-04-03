'use client'

import StickyBar from '@/components/StickyBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainSection from '@/components/PainSection'
import OffersSection from '@/components/OffersSection'
import HowItWorks from '@/components/HowItWorks'
import ForWhom from '@/components/ForWhom'
import ProofSection from '@/components/ProofSection'
import TrustSection from '@/components/TrustSection'
import FaqSection from '@/components/FaqSection'
import CalendarSection from '@/components/CalendarSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <StickyBar />
      <Navbar />
      <Hero />
      <PainSection />
      <OffersSection />
      <HowItWorks />
      <ForWhom />
      <ProofSection />
      <TrustSection />
      <FaqSection />
      <CalendarSection />
      <Footer />
    </>
  )
}
