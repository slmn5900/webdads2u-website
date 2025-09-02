<<<<<<< HEAD
// "use client"
// import React from 'react'
// import SeoHero from './SeoHero'
// import './Seoservice.scss'
// import Seotab from './Seotab'
// import Lookingbest from './Lookingbest'
// import SeoFaq from './SeoFaq';
// const Seocomapny = () => {
//   return (
//     <>
//        <SeoHero/>
//   <Seotab/>
//   <Lookingbest/>
//   <SeoFaq/>
//     </>
//   )
// }

// export default Seocomapny

'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import './Seoservice.scss';

=======
'use client';
import React, { useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import './Seoservice.scss';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import SeoLookingSection from './SeoLookingSection';
import SeoProcessSection from './SeoProcessSection';
import OurHandpickedSection from './OurHandpickedSection';
import DigitalMarketingTool from './DigitalMarketingTool';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import { MenuContext } from '../../../layout/context/menucontext';
import { useEffect } from 'react';
>>>>>>> a0d19cc (Initial commit)
// Dynamically import each component with SSR set to false
const ServiceWeProvide = dynamic(() => import('./ServiceWeProvide'), { ssr: false });
const SeoHero = dynamic(() => import('./SeoHero'), { ssr: false });
const Seotab = dynamic(() => import('./Seotab'), { ssr: false });
<<<<<<< HEAD
const Lookingbest = dynamic(() => import('./Lookingbest'), { ssr: false });
const SeoFaq = dynamic(() => import('./SeoFaq'), { ssr: false });
// const SliderimagebrandingdesignStreaming = dynamic(() => import('../../../components/'), { ssr: false });
const Seocomapny = () => {
    return (
        <>
            <SeoHero />
            <Seotab />
            <ServiceWeProvide />
            <Lookingbest />
            <SeoFaq />
=======
// const SliderimagebrandingdesignStreaming = dynamic(() => import('../../../components/'), { ssr: false });

const Seocomapny = () => {
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
        setQna_section,
        setourstreams,
        setBest_mobile_section,
        setPagedata
    } = useContext(MenuContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/seo-company.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);
                setBest_mobile_section(data.best_mobile_section);
                setHeader_section(data.header_section);
                setSlider_section(data.slider_section);
                setSlider_section2(data.slider2_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setourstreams(data.our_streams);
                setPagedata(data);
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
            <SeoHero />
            <ClientLogoSlider />
            <Seotab />
            <ServiceWeProvide />
            <SeoLookingSection />
            <SeoProcessSection />
            <OurHandpickedSection />
            <DigitalMarketingTool />
            <BrochureFaq />
>>>>>>> a0d19cc (Initial commit)
        </>
    );
};

export default Seocomapny;
