// "use client"
// import React from 'react'
// import './website-redesign.css'
// import Websiteredesignbanner from './website-redesign'
// import Benefitswebsite from './Benefits-Website'
// import Benefitscard from './Benefits-card'
// import Gowebsiteredesigning from './Go-Website-Redesigning'
// import Beginningwithredesign from './Beginning-with-Redesign'
// import Contentoptimization from './Content-Optimization'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Makeplansproceed from './Make-Plans-Proceed'
// import FQwebsiteredesign from './FQ-website-redesign'
// import Determinemotive from './Determine-Motive'


// const RedesignMain = () => {
//   return (
//     <div>
//       <Websiteredesignbanner />
//       <Benefitswebsite />
//       <Benefitscard />
//       <Gowebsiteredesigning />
//       <Beginningwithredesign />
//       <Determinemotive />
//       <Contentoptimization />
//       <SocialMedia />
//       <Makeplansproceed />
//       <FQwebsiteredesign />
//     </div>
//   )
// }

// export default RedesignMain;

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './website-redesign.css';

// Dynamically import components with SSR set to false
const Websiteredesignbanner = dynamic(() => import('./website-redesign'), { ssr: false });
const Benefitswebsite = dynamic(() => import('./Benefits-Website'), { ssr: false });
const Benefitscard = dynamic(() => import('./Benefits-card'), { ssr: false });
const Gowebsiteredesigning = dynamic(() => import('./Go-Website-Redesigning'), { ssr: false });
const Beginningwithredesign = dynamic(() => import('./Beginning-with-Redesign'), { ssr: false });
const Contentoptimization = dynamic(() => import('./Content-Optimization'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Makeplansproceed = dynamic(() => import('./Make-Plans-Proceed'), { ssr: false });
const FQwebsiteredesign = dynamic(() => import('./FQ-website-redesign'), { ssr: false });
const Determinemotive = dynamic(() => import('./Determine-Motive'), { ssr: false });

const RedesignMain = () => {
  return (
    <div>
      <Websiteredesignbanner />
      <Benefitswebsite />
      <Benefitscard />
      <Gowebsiteredesigning />
      <Beginningwithredesign />
      <Determinemotive />
      <Contentoptimization />
      <SocialMedia />
      <Makeplansproceed />
      <FQwebsiteredesign />
    </div>
  );
}

export default RedesignMain;
