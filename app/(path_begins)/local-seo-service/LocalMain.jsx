// "use client"
// import React from 'react'
// import './local-seo-service.css'
// import FQlocalseoservice from './FQ-local-seo-service'
// import LookingEcommerceSEO from './Looking-E-commerce-SEO'
// import LocalSEOcompany from './Local-SEO-Company'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Whyseo from './why-seo'
// import SEOservicesindia from './SEO-Services-India'
// import Localseoservicesinclude from './Local-Seo-services-Include'
// import Localseoservicebanner from './local-seo-service-banner'

// const LocalMain = () => {
//   return (
//     <div>
//       <Localseoservicebanner />
//       <SEOservicesindia />
//       <Whyseo />
//       <Localseoservicesinclude />
//       <SocialMedia />
//       <LocalSEOcompany />
//       <LookingEcommerceSEO />
//       <FQlocalseoservice />
//     </div>
//   )
// }

// export default LocalMain;

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './local-seo-service.css';

// Dynamically import each component with SSR set to false
const FQlocalseoservice = dynamic(() => import('./FQ-local-seo-service'), { ssr: false });
const LookingEcommerceSEO = dynamic(() => import('./Looking-E-commerce-SEO'), { ssr: false });
const LocalSEOcompany = dynamic(() => import('./Local-SEO-Company'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Whyseo = dynamic(() => import('./why-seo'), { ssr: false });
const SEOservicesindia = dynamic(() => import('./SEO-Services-India'), { ssr: false });
const Localseoservicesinclude = dynamic(() => import('./Local-Seo-services-Include'), { ssr: false });
const Localseoservicebanner = dynamic(() => import('./local-seo-service-banner'), { ssr: false });

const LocalMain = () => {
  return (
    <div>
      <Localseoservicebanner />
      <SEOservicesindia />
      <Whyseo />
      <Localseoservicesinclude />
      <LocalSEOcompany />
      <LookingEcommerceSEO />
      <FQlocalseoservice />
      <SocialMedia />
    </div>
  );
};

export default LocalMain;

