// "use client"
// import React from 'react'
// import'./web-hosting-service.css'
// import Webhostingservice from './web-hosting-service'
// import Webhosting from './Web-Hosting'
// import Webhostingplatform from './Web-Hosting-Platform'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Ourplatform from './Our-platform'
// import Lookingforwebhostingservices from './Looking-for-Web-Hosting-Services'
// import FQhosting from './FQ-hosting'

// const WebMain = () => {
//   return (
//     <div>
//       <Webhostingservice />
//       <Webhosting />
//       <Webhostingplatform />
//       <SocialMedia />
//       <Ourplatform />
//       <Lookingforwebhostingservices />
//       <FQhosting />


//     </div>
//   )
// }

// export default WebMain

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './web-hosting-service.css';

// Dynamically import components with SSR set to false
const Webhostingservice = dynamic(() => import('./web-hosting-service'), { ssr: false });
const Webhosting = dynamic(() => import('./Web-Hosting'), { ssr: false });
const Webhostingplatform = dynamic(() => import('./Web-Hosting-Platform'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Ourplatform = dynamic(() => import('./Our-platform'), { ssr: false });
const Lookingforwebhostingservices = dynamic(() => import('./Looking-for-Web-Hosting-Services'), { ssr: false });
const FQhosting = dynamic(() => import('./FQ-hosting'), { ssr: false });

const WebMain = () => {
  return (
    <div>
      <Webhostingservice />
      <Webhosting />
      <Webhostingplatform />
<<<<<<< HEAD
      <SocialMedia />
      <Ourplatform />
      <Lookingforwebhostingservices />
      <FQhosting />
=======
      <Ourplatform />
      <Lookingforwebhostingservices />
      <FQhosting />
      <SocialMedia />
>>>>>>> 6010d3c (Add new features and updates)
    </div>
  );
}

export default WebMain;
