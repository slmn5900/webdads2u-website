// "use client"
// import React from 'react'
// import'./HTML5.css'
// import Htmlbanner from './Html-banner'
// import AdvantagesofHTML from './Advantages-of-HTML'
// import BenefitsofUsingHTML5 from './Benefits-of-Using-HTML5'
// import Technicalstack from './Technical-Stack'
// import SocialMedia from './../../../components/common/SocialMedia'
// import Html5webdevelopment from './html5-web-development'
// import Webmobile from './Web-&-Mobile'
// const HtmlMain = () => {
//   return (
//     <>
//     <Htmlbanner />
//       <AdvantagesofHTML />
//       <BenefitsofUsingHTML5 />
//       <Technicalstack />
//       <SocialMedia />
//       <Html5webdevelopment />
//       <Webmobile />
//     </>
//   )
// }

// export default HtmlMain

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './HTML5.css';
import Banner from '../../../components/ui/banner/Banner';
import { MenuContext } from '../../../layout/context/menucontext';

// Dynamically import each component with SSR set to false
const Htmlbanner = dynamic(() => import('./Html-banner'), { ssr: false });
const AdvantagesofHTML = dynamic(() => import('./Advantages-of-HTML'), { ssr: false });
const BenefitsofUsingHTML5 = dynamic(() => import('./Benefits-of-Using-HTML5'), { ssr: false });
const Technicalstack = dynamic(() => import('./Technical-Stack'), { ssr: false });
const SocialMedia = dynamic(() => import('./../../../components/common/SocialMedia'), { ssr: false });
const Html5webdevelopment = dynamic(() => import('./html5-web-development'), { ssr: false });
const Webmobile = dynamic(() => import('./Web-&-Mobile'), { ssr: false });

const HtmlMain = () => {
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
                const response = await fetch('/inner-page-api/Html5.json');
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
            {/* <Htmlbanner /> */}
            <Banner />
            <AdvantagesofHTML />
            <BenefitsofUsingHTML5 />
            <Technicalstack />
            <Html5webdevelopment />
            <Webmobile />
            {/* <SocialMedia /> */}
        </>
    );
};

export default HtmlMain;
