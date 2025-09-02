// "use client"
// import React from 'react'
// import './Fq-website-maintenance.css'
// import Fqwebsitemaintenance from './Fq-website-maintenance'
// import Lookingwebsitemaintenance from './Looking-Website-Maintenance'
// import Benefitsselecting from './Benefits-Selecting'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Webmaintenanceservices from './Web-Maintenance-Services'
// import Websitemaintenancecompany from './website-maintenance-company'
// import Websitemaintenancebanner from './website-maintenancebanner'
// import Benefitsselectingcard from './Benefitsselecting-card'

// const WebsiteMain = () => {
//   return (
//     <div>
//       < Websitemaintenancebanner/>
//       <Websitemaintenancecompany />
//       <Webmaintenanceservices />
//       <SocialMedia />
//       <Benefitsselecting />
//       <Benefitsselectingcard/>
//       <Lookingwebsitemaintenance/>
//       <Fqwebsitemaintenance/>
//     </div>
//   )
// }

// export default WebsiteMain

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './Fq-website-maintenance.css';

// Dynamically import components with SSR set to false
<<<<<<< HEAD
const Websitemaintenancebanner = dynamic(() => import('./website-maintenancebanner'), { ssr: false });
=======
const Websitemaintenancebanner = dynamic(() => import('./WebsiteBanner.jsx'), { ssr: false });
>>>>>>> a0d19cc (Initial commit)
const Websitemaintenancecompany = dynamic(() => import('./website-maintenance-company'), { ssr: false });
const Webmaintenanceservices = dynamic(() => import('./Web-Maintenance-Services'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Benefitsselecting = dynamic(() => import('./Benefits-Selecting'), { ssr: false });
const Benefitsselectingcard = dynamic(() => import('./Benefitsselecting-card'), { ssr: false });
const Lookingwebsitemaintenance = dynamic(() => import('./Looking-Website-Maintenance'), { ssr: false });
const Fqwebsitemaintenance = dynamic(() => import('./Fq-website-maintenance'), { ssr: false });

const WebsiteMain = () => {
  return (
    <div>
      <Websitemaintenancebanner />
      <Websitemaintenancecompany />
      <Webmaintenanceservices />
      <Benefitsselecting />
      <Benefitsselectingcard />
      <Lookingwebsitemaintenance />
      <Fqwebsitemaintenance />
      <SocialMedia />
    </div>
  );
}

export default WebsiteMain;
