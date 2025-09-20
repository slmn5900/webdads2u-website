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

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './custom-web-design.css';
import { MenuContext } from '../../../layout/context/menucontext';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureFaq from '../../../components/ui/BrochureFaq';
// import Banner from '../../../components/ui/banner/Banner';

// Dynamically import each component with SSR set to false
const Customwebdesignbanner = dynamic(() => import('./custom-web-design-banner'), { ssr: false });
const Whywebdads2u = dynamic(() => import('./Why-Webdads2u'), { ssr: false });
const Customwebdesignservices = dynamic(() => import('./Custom-Web-Design-Services'), { ssr: false });
// const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Whychoosewedads2u = dynamic(() => import('./Why-Choose-Wedads2u'), { ssr: false });
const Lookingforcustomwebdesign = dynamic(() => import('./Looking-for-Custom-Web-Design'), { ssr: false });
const FQcustomwebdesign = dynamic(() => import('./FQcustom-web-design'), { ssr: false });
const CustomTabPanel = dynamic(() => import('../../../components/CustomTabPanel'), { ssr: false });

const CustomeWebdesign = () => {
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
                const response = await fetch('/inner-page-api/custom-web-design.json');
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
        <>
            {/* <Banner /> */}
            <Customwebdesignbanner />
            <ClientLogoSlider />
            <Whywebdads2u />
            <Customwebdesignservices />
            <Whychoosewedads2u />
            <Lookingforcustomwebdesign />
            {/* <Loader /> */}
            <CustomTabPanel />
            {/* <FQcustomwebdesign /> */}
            <BrochureFaq />
            {/* <SocialMedia /> */}
        </>
    );
};

export default CustomeWebdesign;
