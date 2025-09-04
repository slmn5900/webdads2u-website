'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './wordpress-development.css';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';

// Dynamically import components with SSR set to false
const WordpressDevelopmentBanner = dynamic(() => import('./wordpress-development-Banner'), { ssr: false });
const BrochureDescription = dynamic(() => import('../../../components/ui/BrochureDescription'), { ssr: false });
const WordPressDevelopmentCompany = dynamic(() => import('./WordPress-Development-Company'), { ssr: false });
const WordPressUseful = dynamic(() => import('./WordPress-Useful'), { ssr: false });
const WordPressplugins = dynamic(() => import('./WordPress-plugins'), { ssr: false });
const TopQualityWordPress = dynamic(() => import('./top-quality-WordPress'), { ssr: false });
const Themes = dynamic(() => import('./Themes'), { ssr: false });
const WordpressCard = dynamic(() => import('./Wordpress-Card'), { ssr: false });
const WordPressWebsiteworks = dynamic(() => import('./WordPress-Website-works'), { ssr: false });
const WordPressDevelopmentService = dynamic(() => import('./WordPress-Development-Service'), { ssr: false });
const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

const WordpressMain = () => {
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
                const response = await fetch('/inner-page-api/wordpress-development.json');
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
        <section>
            <Banner />
            {/* <WordpressDevelopmentBanner /> */}
            <BrochureDescription />
            {/* <WordPressDevelopmentCompany /> */}
            <WordPressUseful />
            <WordPressplugins />
            <TopQualityWordPress />
            <Themes />
            <WordpressCard />
            <WordPressWebsiteworks />
            <WordPressDevelopmentService />
            <FrequentlyAskedQuestions />
            {/* <SocialMedia /> */}
        </section>
    );
};

export default WordpressMain;
