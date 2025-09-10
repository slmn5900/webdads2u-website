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
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './ppc-service.css';
import Banner from "../../../components/ui/banner/Banner"
import { MenuContext } from '../../../layout/context/menucontext';

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

   const {
          header_section,
          setPagedata,
          setHeader_section,
          setSlider_section,
          setCompany_section,
          setDesign_section,
          setList_section,
          setAmazing_section,
          setAmazingcard_section,
          setWork_section,
          setChoose_section,
          setConsultation_section,
          setQna_section
      } = useContext(MenuContext);
  
      useEffect(() => {
          const getdata = async () => {
              try {
                  const response = await fetch('/inner-page-api/ppc-service.json');
                  const data = await response.json();
                  setPagedata(data);
                  setHeader_section(data.header_section);
                  setSlider_section(data.slider_section);
                  setCompany_section(data.company_section);
                  setDesign_section(data.design_section);
                  setList_section(data.list_section);
                  setAmazing_section(data.amazing_section);
                  setAmazingcard_section(data.amazingcard_section);
                  setWork_section(data.work_section);
                  setChoose_section(data.choose_section);
                  setConsultation_section(data.consultation_section);
                  setQna_section(data.qna_section);
              } catch (error) {
                  console.log(error, 'error');
              }
          };
          getdata();
      }, []);
  return (
    <div>
      <Banner/>
      {/* <Ppcservicebanner /> */}
      <WhatarePPCServices />
      <Ppcgoogle />
      <Promotewebdads2uppc />
      <Payperclick />
      <PPCservicesindia />
      <Fqppcservice />
      {/* <SocialMedia /> */}
    </div>
  );
}

export default PccMain;
