// "use client"
// import React from 'react'
// import './responsive-website.css'
// import Responsivewebsitebanner from './responsive-website-banner'
// import Reponsivewebdesigningservices from './Reponsive-Web-Designing-Services'
// import ResponsiveWebdesigncompanychennai from './Responsive-Web-Design-Company-Chennai'
// import Advantagesusingresponsiveweb from './Advantages-Using-Responsive-Web'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Fqresponsivewebsite from './FQ-responsive-website'

// const RresponsiveMain = () => {
//   return (
//     <div>
//       <Responsivewebsitebanner/>
//       <Reponsivewebdesigningservices/>
//       <ResponsiveWebdesigncompanychennai/>
//       <Advantagesusingresponsiveweb/>
//       <SocialMedia />
//       <Fqresponsivewebsite/>
//     </div>
//   )
// }

// export default RresponsiveMain;

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './responsive-website.css';

// Dynamically import each component with SSR set to false
const Responsivewebsitebanner = dynamic(() => import('./responsive-website-banner'), { ssr: false });
const Reponsivewebdesigningservices = dynamic(() => import('./Reponsive-Web-Designing-Services'), { ssr: false });
const ResponsiveWebdesigncompanychennai = dynamic(() => import('./Responsive-Web-Design-Company-Chennai'), { ssr: false });
const Advantagesusingresponsiveweb = dynamic(() => import('./Advantages-Using-Responsive-Web'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Fqresponsivewebsite = dynamic(() => import('./FQ-responsive-website'), { ssr: false });

const RresponsiveMain = () => {
  return (
    <div>
      <Responsivewebsitebanner />
      <Reponsivewebdesigningservices />
      <ResponsiveWebdesigncompanychennai />
      <Advantagesusingresponsiveweb />
      <SocialMedia />
      <Fqresponsivewebsite />
    </div>
  );
}

export default RresponsiveMain;
