// "use client"
// import React from 'react'
// import './ppc-service.css'
// import Ppcservicebanner from './ppc-service-banner'
// import Fqppcservice from './Fq-ppc-service'
// import PPCservicesindia from './PPC Services-India'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Payperclick from './Pay-Per-Click'
// import Promotewebdads2uppc from './Promote-webdads2u-PPC'
// import WhatarePPCServices from './What-are-PPC-Services'
// import Ppcgoogle from './PPC-Google'

// const PccMain = () => {
//   return (
//     <div>
//       <Ppcservicebanner />
//       <WhatarePPCServices />
//       <Ppcgoogle />
//       <Promotewebdads2uppc />
//       <Payperclick />
//       <SocialMedia />
//       <PPCservicesindia />
//       <Fqppcservice />
//     </div>
//   )
// }

// export default PccMain

"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './ppc-service.css';

// Dynamically import each component with SSR set to false
const Ppcservicebanner = dynamic(() => import('./ppc-service-banner'), { ssr: false });
const Fqppcservice = dynamic(() => import('./Fq-ppc-service'), { ssr: false });
const PPCservicesindia = dynamic(() => import('./PPC Services-India'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Payperclick = dynamic(() => import('./Pay-Per-Click'), { ssr: false });
const Promotewebdads2uppc = dynamic(() => import('./Promote-webdads2u-PPC'), { ssr: false });
const WhatarePPCServices = dynamic(() => import('./What-are-PPC-Services'), { ssr: false });
const Ppcgoogle = dynamic(() => import('./PPC-Google'), { ssr: false });

const PccMain = () => {
  return (
    <div>
      <Ppcservicebanner />
      <WhatarePPCServices />
      <Ppcgoogle />
      <Promotewebdads2uppc />
      <Payperclick />
      <SocialMedia />
      <PPCservicesindia />
      <Fqppcservice />
    </div>
  );
}

export default PccMain;
