// // "use client"
// // import React from 'react'
// // import WebsitedevHero from './WebsitedevHero'
// // import WebdevService from './webdevService'
// // import Websitetab from './Websitetab'
// // import SocialMedia from '../../../components/common/SocialMedia'
// // import "./websitedeveloment.scss"
// // const WebsiteDevelopment = () => {
// //   return (
// //     <>
// //        <WebsitedevHero />
// //     <WebdevService />
// //     <Websitetab />
// //     <SocialMedia />
// //     </>
// //   )
// // }

// // export default WebsiteDevelopment

// "use client";
// import React from 'react';
// import dynamic from 'next/dynamic';
// import "./websitedeveloment.scss";

// // Dynamically import the components with SSR disabled
// const WebsitedevHero = dynamic(() => import('./WebsitedevHero'), { ssr: false });
// const WebdevService = dynamic(() => import('./WebdevService'), { ssr: false });
// const Websitetab = dynamic(() => import('./Websitetab'), { ssr: false });
// const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

// const WebsiteDevelopment = () => {
//   return (
//     <>
//       <WebsitedevHero />
//       <WebdevService />
//       <Websitetab />
//       <SocialMedia />
//     </>
//   );
// };

// export default WebsiteDevelopment;
'use client';
import React, { useContext, useEffect, useState } from 'react';
import Banner from './new-ui/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import OurStreams from './new-ui/OurStreams';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import WebTabSection from './new-ui/WebTabSection';
import Subscribe from './new-ui/Subscribe';
import { MenuContext } from '../../../layout/context/menucontext';
import Development from './new-ui/development';

export default function WebsiteDevelopment() {
    const {
        header_section,
        setSlider_section2,
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
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/website-development.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);
                setHeader_section(data.header_section);
                setSlider_section(data.section_2);
                setSlider_section2(data.slider2_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setAmazing_section(data.amazing_section);
                setAmazingcard_section(data.section_5);
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
        <>
            <Banner />
            <ClientLogoSlider />
            <OurStreams />
            {/* <BrochureDescription /> */}
            <AmazingWebDesign />
            <WebTabSection />
            <Development data={data?.section_7} />
            <Subscribe />
        </>
    );
}
