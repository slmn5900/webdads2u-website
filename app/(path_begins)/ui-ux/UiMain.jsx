

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './ui-ux.css';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Dynamically import components with SSR set to false
const Uiuxbanner = dynamic(() => import('./ui-ux-banner'), { ssr: false });
const Webdevelopmentservices = dynamic(() => import('./Web-Development-Services'), { ssr: false });
const UXdesign = dynamic(() => import('./UX-Design'), { ssr: false });
const UXcesigncompany = dynamic(() => import('./UX-Design-Company'), { ssr: false });
const KeyelementUI = dynamic(() => import('./Key-Elements-UI'), { ssr: false });
const Fquiux = dynamic(() => import('./FQ-ui-ux'), { ssr: false });
const UXwebdesigndevelopment = dynamic(() => import('./UX-Web-Design-Development'), { ssr: false });
const WebsiteUXUIdesigningservices = dynamic(() => import('./Website-UX-UI-Designing-Services'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Uxdesign = dynamic(() => import('./Best-UI/UX-Design'), { ssr: false });
const Ux = dynamic(() => import('./UX'), { ssr: false });
const Uiuxsliser = dynamic(() => import('./Ui-ux-sliser'), { ssr: false });
const CircleTabs = dynamic(() => import('./ui-ux-Interactive-Circle-tab'), { ssr: false });

const Page = () => {
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
                const response = await fetch('/inner-page-api/ui-ux.json');
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
            {/* <Uiuxbanner /> */}
            <Webdevelopmentservices />
            <UXdesign />
            <UXcesigncompany />
            <KeyelementUI />
            <CircleTabs />
            <Uiuxsliser />
            <Ux />
            <Uxdesign />
            <WebsiteUXUIdesigningservices />
            <UXwebdesigndevelopment />
            {/* <Fquiux /> */}
            <BrochureFaq />
            {/* <SocialMedia /> */}
        </div>
    );
};

export default Page;
