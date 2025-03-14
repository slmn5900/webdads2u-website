// "use client"
// import React from 'react'
// import './e-commerce-seo-service.css'
// import FQecommerceseoservice from './FQ-e-commerce-seo-service'
// import Cmswebsite from './Cms-Website'
// import LookingEcommerceSEO from './Looking-E-commerce-SEO'
// import Ecommercecard from './e-commerce-card'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Whywebdads2uecommerceseoservices from './Why-Webdads2u-E-commerce-Seo-Services'
// import Ecommerceseoadvantage from './E-commerce-Seo-Advantage'
// import Provenecommerce from './Proven-eCommerce'
// import Ecommerceseoservicebanner from './e-commerce-seo-service-banner'

// const EcommerceMain = () => {
//   return (
//     <div>
//       <Ecommerceseoservicebanner />
//       <Provenecommerce />
//       <Ecommerceseoadvantage />
//       <Whywebdads2uecommerceseoservices />
//       <SocialMedia />
//       <Ecommercecard />
//       <LookingEcommerceSEO />
//       <Cmswebsite />
//       <FQecommerceseoservice />
//     </div>
//   )
// }

// export default EcommerceMain


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './e-commerce-seo-service.css';

// Dynamically import each component with SSR set to false
const Ecommerceseoservicebanner = dynamic(() => import('./e-commerce-seo-service-banner'), { ssr: false });
const Provenecommerce = dynamic(() => import('./Proven-eCommerce'), { ssr: false });
const Ecommerceseoadvantage = dynamic(() => import('./E-commerce-Seo-Advantage'), { ssr: false });
const Whywebdads2uecommerceseoservices = dynamic(() => import('./Why-Webdads2u-E-commerce-Seo-Services'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Ecommercecard = dynamic(() => import('./e-commerce-card'), { ssr: false });
const LookingEcommerceSEO = dynamic(() => import('./Looking-E-commerce-SEO'), { ssr: false });
const Cmswebsite = dynamic(() => import('./Cms-Website'), { ssr: false });
const FQecommerceseoservice = dynamic(() => import('./FQ-e-commerce-seo-service'), { ssr: false });

const EcommerceMain = () => {
  return (
    <div>
      <Ecommerceseoservicebanner />
      <Provenecommerce />
      <Ecommerceseoadvantage />
      <Whywebdads2uecommerceseoservices />
      <SocialMedia />
      <Ecommercecard />
      <LookingEcommerceSEO />
      <Cmswebsite />
      <FQecommerceseoservice />
    </div>
  );
}

export default EcommerceMain;
