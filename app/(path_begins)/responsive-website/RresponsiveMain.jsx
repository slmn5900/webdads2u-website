// "use client"
// import React from 'react'
// import './responsive-website.css'
// import Responsivewebsitebanner from './responsive-website-banner'
// import Reponsivewebdesigningservices from './Reponsive-Web-Designing-Services'
// import ResponsiveWebdesigncompanychennai from './Responsive-Web-Design-Company-Chennai'
// import Advantagesusingresponsiveweb from './Advantages-Using-Responsive-Web'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Fqresponsivewebsite from './FQ-responsive-website'

// const RresponsiveMain = () => {
//   return (
//     <div>
//       <Responsivewebsitebanner/>
//       <Reponsivewebdesigningservices/>
//       <ResponsiveWebdesigncompanychennai/>
//       <Advantagesusingresponsiveweb/>
//       <SocialMedia />
//       <Fqresponsivewebsite/>
//     </div>
//   )
// }

// export default RresponsiveMain;

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './responsive-website.css';

import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Dynamically import each component with SSR set to false
const Responsivewebsitebanner = dynamic(() => import('./responsive-website-banner'), { ssr: false });
const Reponsivewebdesigningservices = dynamic(() => import('./Reponsive-Web-Designing-Services'), { ssr: false });
const ResponsiveWebdesigncompanychennai = dynamic(() => import('./Responsive-Web-Design-Company-Chennai'), { ssr: false });
const Advantagesusingresponsiveweb = dynamic(() => import('./Advantages-Using-Responsive-Web'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Fqresponsivewebsite = dynamic(() => import('./FQ-responsive-website'), { ssr: false });

const RresponsiveMain = () => {
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
                const response = await fetch('/inner-page-api/responsive-website.json');
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
            {/* <Responsivewebsitebanner /> */}
            <Reponsivewebdesigningservices />
            <ResponsiveWebdesigncompanychennai />
            <Advantagesusingresponsiveweb />
            {/* <Fqresponsivewebsite /> */}
            <BrochureFaq />
            {/* <SocialMedia /> */}
        </div>
    );
};

export default RresponsiveMain;
