// "use client"
// import React from 'react'
// import './domainregistration.css'
// import Domainregistrationbanner from './domain-registration-banner'
// import Amplifyingyouronline from './Amplifying-Your-Online'
// import Domainname from './Domain-Name'
// import Comprehensivedigital from './Comprehensive-Digital'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Rightdomain from './Right-Domain'
// import Lookingdomain from './Looking-Domain'
// import Fqdomainregistration from './Fq-domain-registration'
// const DomainRegistration = () => {
//   return (
//     <>
//      <Domainregistrationbanner />
//       <Amplifyingyouronline />
//       <Domainname />
//       <Comprehensivedigital />
//       <SocialMedia />
//       <Rightdomain />
//       <Lookingdomain />
//       <Fqdomainregistration />
//     </>
//   )
// }

// export default DomainRegistration


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './domainregistration.css';

// Dynamically import each component with SSR set to false
const Domainregistrationbanner = dynamic(() => import('./domain-registration-banner'), { ssr: false });
const Amplifyingyouronline = dynamic(() => import('./Amplifying-Your-Online'), { ssr: false });
const Domainname = dynamic(() => import('./Domain-Name'), { ssr: false });
const Comprehensivedigital = dynamic(() => import('./Comprehensive-Digital'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Rightdomain = dynamic(() => import('./Right-Domain'), { ssr: false });
const Lookingdomain = dynamic(() => import('./Looking-Domain'), { ssr: false });
const Fqdomainregistration = dynamic(() => import('./Fq-domain-registration'), { ssr: false });

const DomainRegistration = () => {
  return (
    <>
      <Domainregistrationbanner />
      <Amplifyingyouronline />
      <Domainname />
      <Comprehensivedigital />
      <SocialMedia />
      <Rightdomain />
      <Lookingdomain />
      <Fqdomainregistration />
    </>
  );
}

export default DomainRegistration;
