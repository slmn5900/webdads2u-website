"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import './brandingdesignbanner.css'

// Dynamically import components with SSR disabled
const Brandingdesignbanner = dynamic(() => import('./branding-design-banner'), { ssr: false })
const SliderimagebrandingdesignStreaming = dynamic(() => import('./Slider-image-branding-design-Streaming'), { ssr: false })
const Brandidentity = dynamic(() => import('./brand-identity'), { ssr: false })
const BrandingServices = dynamic(() => import('./Branding-Services'), { ssr: false })
const BrandIdentityIncludes = dynamic(() => import('./brand-identity-includes'), { ssr: false })
const ThinkingProcess = dynamic(() => import('./Thinking-Process'), { ssr: false })
const Portfolio = dynamic(() => import('./Portfolio'), { ssr: false })
const FocusOnBranding = dynamic(() => import('./Focus-On-Branding'), { ssr: false })
const Helpyourbusiness = dynamic(() => import('./help-your-business'), { ssr: false })
const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false })
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false })

const faqParagraph = "Explore common inquiries with our FAQs. Get quick answers to popular questions about our services, processes, and more."
const faqData = [
  { heading1: "" }
]

const BrandingMain = () => {
  return (
    <div>
      <Brandingdesignbanner />
      <SliderimagebrandingdesignStreaming />
      <Brandidentity />
      <BrandingServices />
      <BrandIdentityIncludes />
      <ThinkingProcess />
      <Portfolio />
      <FocusOnBranding />
      <Helpyourbusiness />
<<<<<<< HEAD
      <SocialMedia />
      <FrequentlyAskedQuestions />
=======
      <FrequentlyAskedQuestions />
      <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </div>
  )
}

export default BrandingMain
