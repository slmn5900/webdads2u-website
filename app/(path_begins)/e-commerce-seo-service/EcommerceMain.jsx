// "use client"
// import React from 'react'
// import './e-commerce-seo-service.css'
// import FQecommerceseoservice from './FQ-e-commerce-seo-service'
// import Cmswebsite from './Cms-Website'
// import LookingEcommerceSEO from './Looking-E-commerce-SEO'
// import Ecommercecard from './e-commerce-card'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Whywebdads2uecommerceseoservices from './Why-Webdads2u-E-commerce-Seo-Services'
// import Ecommerceseoadvantage from './E-commerce-Seo-Advantage'
// import Provenecommerce from './Proven-eCommerce'
// import Ecommerceseoservicebanner from './e-commerce-seo-service-banner'

// const EcommerceMain = () => {
//   return (
//     <div>
//       <Ecommerceseoservicebanner />
//       <Provenecommerce />
//       <Ecommerceseoadvantage />
//       <Whywebdads2uecommerceseoservices />
//       <SocialMedia />
//       <Ecommercecard />
//       <LookingEcommerceSEO />
//       <Cmswebsite />
//       <FQecommerceseoservice />
//     </div>
//   )
// }

// export default EcommerceMain

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './e-commerce-seo-service.css';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Dynamically import each component with SSR set to false
// const Ecommerceseoservicebanner = dynamic(() => import('./e-commerce-seo-service-banner'), { ssr: false });
const Provenecommerce = dynamic(() => import('./Proven-eCommerce'), { ssr: false });
const Ecommerceseoadvantage = dynamic(() => import('./E-commerce-Seo-Advantage'), { ssr: false });
const Whywebdads2uecommerceseoservices = dynamic(() => import('./Why-Webdads2u-E-commerce-Seo-Services'), { ssr: false });
// const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Ecommercecard = dynamic(() => import('./e-commerce-card'), { ssr: false });
const LookingEcommerceSEO = dynamic(() => import('./Looking-E-commerce-SEO'), { ssr: false });
const Cmswebsite = dynamic(() => import('./Cms-Website'), { ssr: false });
const FQecommerceseoservice = dynamic(() => import('./FQ-e-commerce-seo-service'), { ssr: false });

const EcommerceMain = () => {
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
            <Banner />
            {/* <Ecommerceseoservicebanner /> */}
            <ClientLogoSlider />

            <Provenecommerce />
            <Ecommerceseoadvantage />
            <Whywebdads2uecommerceseoservices />
            <Ecommercecard />
            <LookingEcommerceSEO />
            <Cmswebsite />
            {/* <FQecommerceseoservice /> */}
            <BrochureFaq />
            {/* <SocialMedia /> */}
        </div>
    );
};

export default EcommerceMain;
