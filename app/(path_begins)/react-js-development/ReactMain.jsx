// "use client"
// import React from 'react'
// import './react-js-development.css'
// import ReactjsDevelopmentBanner from './react-js-development-banner'
// import BestReactJS from './Best-React-JS'
// import AngularJS from './Angular-JS'
// import FrequentlyAskedQuestions from './Frequently-Asked-Questions'
// import LookingforReact from './Looking-for-React'
// import Libraries from './Libraries'
// import ReactjsFeatures from './Reactjs-Features'
// import BenefitsofReactjs from './Benefits-of-Reactjs'
// import SocialMedia from '../../../components/common/SocialMedia'
// const ReactMain = () => {
//   return (
//     <div>
//       <ReactjsDevelopmentBanner />
//       <BestReactJS />
//       <AngularJS />
//       <BenefitsofReactjs />
//       <ReactjsFeatures/>
//       <SocialMedia />
//       <Libraries/>
//       <LookingforReact/>
//       <FrequentlyAskedQuestions/>
//     </div>
//   )
// }

// export default ReactMain

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './react-js-development.css';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import { Box } from '@mui/material';

// Dynamically import each component with SSR set to false
const ReactjsDevelopmentBanner = dynamic(() => import('./react-js-development-banner'), { ssr: false });
const BestReactJS = dynamic(() => import('./Best-React-JS'), { ssr: false });
const AngularJS = dynamic(() => import('./Angular-JS'), { ssr: false });
const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false });
const LookingforReact = dynamic(() => import('./Looking-for-React'), { ssr: false });
const Libraries = dynamic(() => import('./Libraries'), { ssr: false });
const ReactjsFeatures = dynamic(() => import('./Reactjs-Features'), { ssr: false });
const BenefitsofReactjs = dynamic(() => import('./Benefits-of-Reactjs'), { ssr: false });
// const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

const ReactMain = () => {
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
                const response = await fetch('/inner-page-api/react-js-development.json');
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
            {/* <Banner /> */}
            <ReactjsDevelopmentBanner />
            <Box sx={{ pt: 2 }}>
                <ClientLogoSlider />
            </Box>
            <BestReactJS />
            <AngularJS />
            <BenefitsofReactjs />
            <ReactjsFeatures />
            <Libraries />
            <LookingforReact />
            <BrochureFaq />
            {/* <FrequentlyAskedQuestions /> */}
            {/* <SocialMedia /> */}
        </div>
    );
};

export default ReactMain;
