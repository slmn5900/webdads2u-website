// "use client"
// import React from 'react'
// import './custom-web-design.css'
// import Customwebdesignbanner from './custom-web-design-banner'
// import Whywebdads2u from './Why-Webdads2u'
// import Customwebdesignservices from './Custom-Web-Design-Services'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Whychoosewedads2u from './Why-Choose-Wedads2u'
// import Lookingforcustomwebdesign from './Looking-for-Custom-Web-Design'
// import FQcustomwebdesign from './FQcustom-web-design'
// // import Loader from '../../../components/Loader'
// import CustomTabPanel from "../../../components/CustomTabPanel"
// const CustomeWebdesign = () => {
//   return (
//     <>
//     <Customwebdesignbanner />
//       <Whywebdads2u />
//       <Customwebdesignservices />
//       <SocialMedia />
//       <Whychoosewedads2u />
//       <Lookingforcustomwebdesign />
//       {/* < Loader/> */}
//       <CustomTabPanel />
//       <FQcustomwebdesign />
//     </>
//   )
// }

// export default CustomeWebdesign

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './custom-web-design.css';

// Dynamically import each component with SSR set to false
const Customwebdesignbanner = dynamic(() => import('./custom-web-design-banner'), { ssr: false });
const Whywebdads2u = dynamic(() => import('./Why-Webdads2u'), { ssr: false });
const Customwebdesignservices = dynamic(() => import('./Custom-Web-Design-Services'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Whychoosewedads2u = dynamic(() => import('./Why-Choose-Wedads2u'), { ssr: false });
const Lookingforcustomwebdesign = dynamic(() => import('./Looking-for-Custom-Web-Design'), { ssr: false });
const FQcustomwebdesign = dynamic(() => import('./FQcustom-web-design'), { ssr: false });
const CustomTabPanel = dynamic(() => import('../../../components/CustomTabPanel'), { ssr: false });

const CustomeWebdesign = () => {
  return (
    <>
      <Customwebdesignbanner />
      <Whywebdads2u />
      <Customwebdesignservices />
<<<<<<< HEAD
      <SocialMedia />
=======
>>>>>>> 6010d3c (Add new features and updates)
      <Whychoosewedads2u />
      <Lookingforcustomwebdesign />
      {/* <Loader /> */}
      <CustomTabPanel />
      <FQcustomwebdesign />
<<<<<<< HEAD
=======
      <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </>
  );
};

export default CustomeWebdesign;
