// "use client"
// import React from 'react'
// import './Fq-website-maintenance.css'
// import Fqwebsitemaintenance from './Fq-website-maintenance'
// import Lookingwebsitemaintenance from './Looking-Website-Maintenance'
// import Benefitsselecting from './Benefits-Selecting'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Webmaintenanceservices from './Web-Maintenance-Services'
// import Websitemaintenancecompany from './website-maintenance-company'
// import Websitemaintenancebanner from './website-maintenancebanner'
// import Benefitsselectingcard from './Benefitsselecting-card'

// const WebsiteMain = () => {
//   return (
//     <div>
//       < Websitemaintenancebanner/>
//       <Websitemaintenancecompany />
//       <Webmaintenanceservices />
//       <SocialMedia />
//       <Benefitsselecting />
//       <Benefitsselectingcard/>
//       <Lookingwebsitemaintenance/>
//       <Fqwebsitemaintenance/>
//     </div>
//   )
// }

// export default WebsiteMain

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './Fq-website-maintenance.css';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider.jsx';
import { MenuContext } from '../../../layout/context/menucontext.jsx';

// Dynamically import components with SSR set to false
const Websitemaintenancebanner = dynamic(() => import('./WebsiteBanner.jsx'), { ssr: false });
const Websitemaintenancecompany = dynamic(() => import('./website-maintenance-company'), { ssr: false });
const Webmaintenanceservices = dynamic(() => import('./Web-Maintenance-Services'), { ssr: false });
// const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Benefitsselecting = dynamic(() => import('./Benefits-Selecting'), { ssr: false });
const Benefitsselectingcard = dynamic(() => import('./Benefitsselecting-card'), { ssr: false });
const Lookingwebsitemaintenance = dynamic(() => import('./Looking-Website-Maintenance'), { ssr: false });
const Fqwebsitemaintenance = dynamic(() => import('./Fq-website-maintenance'), { ssr: false });

const WebsiteMain = () => {
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
                const response = await fetch('/inner-page-api/website-maintenance.json');
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
            <Websitemaintenancebanner />
            <ClientLogoSlider />

            <Websitemaintenancecompany />
            <Webmaintenanceservices />
            <Benefitsselecting />
            <Benefitsselectingcard />
            <Lookingwebsitemaintenance />
            <Fqwebsitemaintenance />
            {/* <SocialMedia /> */}
        </div>
    );
};

export default WebsiteMain;
