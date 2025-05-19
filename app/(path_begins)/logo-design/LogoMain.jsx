// "use client"
// import React from 'react'
// import './logo-design.css'
// import Fqlogodesign from './FQ-logo-design'
// import SocialMedia from '../../../components/common/SocialMedia'
// import TypesLogo from './Types-Logo'
// import Logotimeline from './logo-time-line'
// import Graphiclogodesign from './Graphic-Logo-Design'
// import Professionalexperienced from './Professional-Experienced'
// import Companybigbrand from './Company-Big-Brand'
// import Logodesigncard from './logo-design-card'
// import Designcompanybrand from './Design-Company-Brand'
// import Logodesignbanner from './logo-design-banner'
// import Logodesignslider from './logo-design-slider'

// const LogoMain = () => {
//   return (
//     <div>
//       <Logodesignbanner/>
//       <Designcompanybrand/>
//       <Logodesigncard/>
//       <Companybigbrand/>
//       <Logodesignslider/>
//       <Professionalexperienced/>
//       <Graphiclogodesign/>
//       <Logotimeline/>
//       <TypesLogo/>
//       <SocialMedia/>
//       <Fqlogodesign/>
//     </div>
//   )
// }

// export default LogoMain


"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './logo-design.css';

// Dynamically import each component with SSR set to false
const Fqlogodesign = dynamic(() => import('./FQ-logo-design'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const TypesLogo = dynamic(() => import('./Types-Logo'), { ssr: false });
const Logotimeline = dynamic(() => import('./logo-time-line'), { ssr: false });
const Graphiclogodesign = dynamic(() => import('./Graphic-Logo-Design'), { ssr: false });
const Professionalexperienced = dynamic(() => import('./Professional-Experienced'), { ssr: false });
const Companybigbrand = dynamic(() => import('./Company-Big-Brand'), { ssr: false });
const Logodesigncard = dynamic(() => import('./logo-design-card'), { ssr: false });
const Designcompanybrand = dynamic(() => import('./Design-Company-Brand'), { ssr: false });
const Logodesignbanner = dynamic(() => import('./logo-design-banner'), { ssr: false });
const Logodesignslider = dynamic(() => import('./logo-design-slider'), { ssr: false });

const LogoMain = () => {
  return (
    <div>
      <Logodesignbanner />
      <Designcompanybrand />
      <Logodesigncard />
      <Companybigbrand />
      <Logodesignslider />
      <Professionalexperienced />
      <Graphiclogodesign />
      <Logotimeline />
      <TypesLogo />
<<<<<<< HEAD
      <SocialMedia />
      <Fqlogodesign />
=======
      <Fqlogodesign />
      <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </div>
  );
};

export default LogoMain;
