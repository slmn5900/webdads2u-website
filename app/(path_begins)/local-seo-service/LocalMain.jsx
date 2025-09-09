// "use client"
// import React from 'react'
// import './local-seo-service.css'
// import FQlocalseoservice from './FQ-local-seo-service'
// import LookingEcommerceSEO from './Looking-E-commerce-SEO'
// import LocalSEOcompany from './Local-SEO-Company'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Whyseo from './why-seo'
// import SEOservicesindia from './SEO-Services-India'
// import Localseoservicesinclude from './Local-Seo-services-Include'
// import Localseoservicebanner from './local-seo-service-banner'

// const LocalMain = () => {
//   return (
//     <div>
//       <Localseoservicebanner />
//       <SEOservicesindia />
//       <Whyseo />
//       <Localseoservicesinclude />
//       <SocialMedia />
//       <LocalSEOcompany />
//       <LookingEcommerceSEO />
//       <FQlocalseoservice />
//     </div>
//   )
// }

// export default LocalMain;

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './local-seo-service.css';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import { MenuContext } from '../../../layout/context/menucontext';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Dynamically import each component with SSR set to false
const FQlocalseoservice = dynamic(() => import('./FQ-local-seo-service'), { ssr: false });
const LookingEcommerceSEO = dynamic(() => import('./Looking-E-commerce-SEO'), { ssr: false });
const LocalSEOcompany = dynamic(() => import('./Local-SEO-Company'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Whyseo = dynamic(() => import('./why-seo'), { ssr: false });
const SEOservicesindia = dynamic(() => import('./SEO-Services-India'), { ssr: false });
const Localseoservicesinclude = dynamic(() => import('./Local-Seo-services-Include'), { ssr: false });
const Localseoservicebanner = dynamic(() => import('./local-seo-service-banner'), { ssr: false });

const LocalMain = () => {
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
                const response = await fetch('/inner-page-api/e-commerce-seo-service.json');
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
            <Localseoservicebanner />
            <ClientLogoSlider />
            <SEOservicesindia />
            <Whyseo />
            <Localseoservicesinclude />
            <LocalSEOcompany />
            <LookingEcommerceSEO />
            <BrochureFaq />
            {/* <FQlocalseoservice /> */}
            {/* <SocialMedia /> */}
        </div>
    );
};

export default LocalMain;
