'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './brandingdesignbanner.css';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import { MenuContext } from '../../../layout/context/menucontext';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Dynamically import components with SSR disabled
const Brandingdesignbanner = dynamic(() => import('./branding-design-banner'), { ssr: false });
const SliderimagebrandingdesignStreaming = dynamic(() => import('./Slider-image-branding-design-Streaming'), { ssr: false });
const Brandidentity = dynamic(() => import('./brand-identity'), { ssr: false });
const BrandingServices = dynamic(() => import('./Branding-Services'), { ssr: false });
const BrandIdentityIncludes = dynamic(() => import('./brand-identity-includes'), { ssr: false });
const ThinkingProcess = dynamic(() => import('./Thinking-Process'), { ssr: false });
const Portfolio = dynamic(() => import('./Portfolio'), { ssr: false });
const FocusOnBranding = dynamic(() => import('./Focus-On-Branding'), { ssr: false });
const Helpyourbusiness = dynamic(() => import('./help-your-business'), { ssr: false });
const FrequentlyAskedQuestions = dynamic(() => import('./Frequently-Asked-Questions'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });

const faqParagraph = 'Explore common inquiries with our FAQs. Get quick answers to popular questions about our services, processes, and more.';
const faqData = [{ heading1: '' }];

const BrandingMain = () => {
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
                const response = await fetch('/inner-page-api/branding-design.json');
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
            <Brandingdesignbanner />
            <ClientLogoSlider />
            <SliderimagebrandingdesignStreaming />
            <Brandidentity />
            <BrandingServices />
            <BrandIdentityIncludes />
            <ThinkingProcess />
            <Portfolio />
            <FocusOnBranding />
            <Helpyourbusiness />
            <BrochureFaq />
            {/* <FrequentlyAskedQuestions /> */}
            {/* <SocialMedia /> */}
        </div>
    );
};

export default BrandingMain;
