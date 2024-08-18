import React from 'react'
import { ContactMap, CTA, Features, Hero, HowItWorksSection, LatestNews, PartnersAndSupport, StatisticsSection, Testimonials } from './_sections'

export default function Page() {
  return (
    <main>
        <Hero/>
        <PartnersAndSupport/>
        <Features/>
        <StatisticsSection/>
        <Testimonials/>
        <HowItWorksSection/>
        <CTA/>
        <LatestNews/>
        <ContactMap/>
    </main>
  )
}
