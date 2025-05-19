// "use client"
// import React from 'react'
// import './wordpress-development.css'
// import WordpressDevelopmentBanner from './wordpress-development-Banner'
// import WordPressDevelopmentCompany from './WordPress-Development-Company'
// import WordPressUseful from './WordPress-Useful'
// import WordPressplugins from './WordPress-plugins'
// import TopQualityWordPress from './top-quality-WordPress'
// import Themes from './Themes'
// import WordpressCard from './Wordpress-Card'
// import WordPressWebsiteworks from './WordPress-Website-works'
// import WordPressDevelopmentService from './WordPress-Development-Service'
// import FrequentlyAskedQuestions from './Frequently-Asked-Questions'

// import SocialMedia from '../../../components/common/SocialMedia'
// const WordpressMain = () => {
//   return (
//     <section>
//       <WordpressDevelopmentBanner />
//       <WordPressDevelopmentCompany />
//       <WordPressUseful />
//       <WordPressplugins />
//       <TopQualityWordPress />
//       <Themes />
//       <SocialMedia />
//       <WordpressCard />
//       <WordPressWebsiteworks />
//       <WordPressDevelopmentService />
//       <FrequentlyAskedQuestions />
//     </section>
//   )
// }

// export default WordpressMain

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './wordpress-development.css';

// Dynamically import components with SSR set to false
const WordpressDevelopmentBanner = dynamic(() => import('./wordpress-development-Banner'), { ssr: false });
const WordPressDevelopmentCompany = dynamic(() => import('./WordPress-Development-Company'), { ssr: false });
const WordPressUseful = dynamic(() => import('./WordPress-Useful'), { ssr: false });
const WordPressplugins = dynamic(() => import('./WordPress-plugins'), { ssr: false });
const TopQualityWordPress = dynamic(() => import('./top-quality-WordPress'), { ssr: false });
const Themes = dynamic(() => import('./Themes'), { ssr: false });
const WordpressCard = dynamic(() => import('./Wordpress-Card'), { ssr: false });
const WordPressWebsiteworks = dynamic(() => import('./WordPress-Website-works'), { ssr: false });
const WordPressDevelopmentService = dynamic(() => import('./WordPress-Development-Service'), { ssr: false });
const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

const WordpressMain = () => {
  return (
    <section>
      <WordpressDevelopmentBanner />
      <WordPressDevelopmentCompany />
      <WordPressUseful />
      <WordPressplugins />
      <TopQualityWordPress />
      <Themes />
<<<<<<< HEAD
      <SocialMedia />
=======
>>>>>>> 6010d3c (Add new features and updates)
      <WordpressCard />
      <WordPressWebsiteworks />
      <WordPressDevelopmentService />
      <FrequentlyAskedQuestions />
<<<<<<< HEAD
=======
      <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </section>
  );
}

export default WordpressMain;
