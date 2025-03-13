"use client"
import React from 'react'
import './wordpress-development.css'
import WordpressDevelopmentBanner from './wordpress-development-Banner'
import WordPressDevelopmentCompany from './WordPress-Development-Company'
import WordPressUseful from './WordPress-Useful'
import WordPressplugins from './WordPress-plugins'
import TopQualityWordPress from './top-quality-WordPress'
import Themes from './Themes'
import WordpressCard from './Wordpress-Card'
import WordPressWebsiteworks from './WordPress-Website-works'
import WordPressDevelopmentService from './WordPress-Development-Service'
import FrequentlyAskedQuestions from './Frequently-Asked-Questions'

import SocialMedia from '../../../components/common/SocialMedia'
const WordpressMain = () => {
  return (
    <section>
      <WordpressDevelopmentBanner />
      <WordPressDevelopmentCompany />
      <WordPressUseful />
      <WordPressplugins />
      <TopQualityWordPress />
      <Themes />
      <SocialMedia />
      <WordpressCard />
      <WordPressWebsiteworks />
      <WordPressDevelopmentService />
      <FrequentlyAskedQuestions />
    </section>
  )
}

export default WordpressMain