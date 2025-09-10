'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MenuContext } from '../../../layout/context/menucontext';
import './link-building-service.css';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Dynamically import each component with SSR set to false
const Fqlinkbuildingservice = dynamic(() => import('./Fq-link-building-service'), { ssr: false });
const Lookinglinkbuilding = dynamic(() => import('./Looking-Link-Building'), { ssr: false });
const Webdadlinkbuilding = dynamic(() => import('./Webdad-Link-Building'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Domainauthorityimprovements = dynamic(() => import('./Domain-authority-improvements'), { ssr: false });
const Improvedkeywordrankings = dynamic(() => import('./Improved-keyword-rankings'), { ssr: false });
const Increasedwebsitetraffic = dynamic(() => import('./Increased-website-traffic'), { ssr: false });
const Powerfulwhitehat = dynamic(() => import('./Powerful-Whitehat'), { ssr: false });
const Buildingimportant = dynamic(() => import('./Building-Important'), { ssr: false });
const Linkbuildingservicebanner = dynamic(() => import('./link-building-service-banner'), { ssr: false });

const LinkMain = () => {
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
                const response = await fetch('/inner-page-api/link-building-service.json');
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
            <Linkbuildingservicebanner />
            <ClientLogoSlider />
            <Powerfulwhitehat />
            <Buildingimportant />
            <Increasedwebsitetraffic />
            <Improvedkeywordrankings />
            <Domainauthorityimprovements />
            <Webdadlinkbuilding />
            <Lookinglinkbuilding />
            <BrochureFaq />
            {/* <Fqlinkbuildingservice /> */}

            {/* <SocialMedia /> */}
        </div>
    );
};

export default LinkMain;
