import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import AboutPage with SSR disabled
const AboutPage = dynamic(() => import('./About'), {
  ssr: false
});

export const metadata = {
  title: 'Web Design Company In Chennai | Best Website Designers In Chennai',
  description: 'Top web design company in chennai: expert in creating stunning, responsive websites. Affordable rates, custom solutions.',
  keywords: 'web design company in chennai,best website designers in chennai,web design company,website designers'
};

const Page = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default Page;
