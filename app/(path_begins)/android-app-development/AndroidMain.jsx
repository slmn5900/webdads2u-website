'use client';
import React, { useContext, useEffect } from 'react';
import './android-app-development.css';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
// Dynamically import components that should only be rendered on the client side
import dynamic from 'next/dynamic';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Import Android-related services dynamically without SSR
const AndroidAppDevelopmentServices = dynamic(() => import('./Android-App-Development-Services'), { ssr: false });

const AndroidAppServices = dynamic(() => import('./Android-App-Services'), { ssr: false });

const AndroidApplicationDevelopmentServices = dynamic(() => import('./Android-Application-Development-Services'), { ssr: false });

const Webdads2uTechnologies = dynamic(() => import('./Webdads2u-Technologies'), { ssr: false });

const TypesofCustomAndroid = dynamic(() => import('./Types-of-Custom-Android'), { ssr: false });

const AndroidApp = dynamic(() => import('./Android-App'), { ssr: false });

const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false });

const Slider = dynamic(() => import('../../../components/common/Slider-image'), { ssr: false });

const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

const AndroidMain = () => {
    const { setPagedata, setHeader_section, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section, setAmazingcard_section, setWork_section, setChoose_section, setConsultation_section, setQna_section } =
        useContext(MenuContext);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/android-app-development.json');
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
            <ClientLogoSlider />
            <div>
                <AndroidAppDevelopmentServices />
                <AndroidAppServices />
                <AndroidApplicationDevelopmentServices />
                <Webdads2uTechnologies />
                {/* <SocialMedia /> */}
                <TypesofCustomAndroid />
                <AndroidApp />
                <BrochureFaq />
                {/* <SocialMedia /> */}
            </div>
        </div>
    );
};

export default AndroidMain;
