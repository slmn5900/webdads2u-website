'use client';

import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
import './web-hosting-service.css';

// Dynamically import components with SSR set to false
const Webhostingservice = dynamic(() => import('./web-hosting-service'), { ssr: false });
const Webhosting = dynamic(() => import('./Web-Hosting'), { ssr: false });
const Webhostingplatform = dynamic(() => import('./Web-Hosting-Platform'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Ourplatform = dynamic(() => import('./Our-platform'), { ssr: false });
const Lookingforwebhostingservices = dynamic(() => import('./Looking-for-Web-Hosting-Services'), { ssr: false });
const FQhosting = dynamic(() => import('./FQ-hosting'), { ssr: false });

const WebMain = () => {
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
                const response = await fetch('/inner-page-api/web-hosting-service.json');
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
            {/* <Webhostingservice /> */}
            <Webhosting />
            <Webhostingplatform />
            <Ourplatform />
            <Lookingforwebhostingservices />
            <FQhosting />
            {/* <SocialMedia /> */}
        </div>
    );
};

export default WebMain;
