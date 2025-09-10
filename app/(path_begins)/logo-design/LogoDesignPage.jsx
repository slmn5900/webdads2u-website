'use client';
import React, { useState } from 'react';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureDescription from '../../../components/ui/BrochureDescription';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import GraphicLogoDesign from '../../../components/ui/Graphic-Logo-Design/GraphicLogoDesign';
import LogoDesignBanner from './logo-design-banner';
import LogoDesignCard from './logo-design-card';
import ProfessionalExperienced from './Professional-Experienced';
import LogoTimeline from './logo-time-line';
import { Box } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';
import { useEffect } from 'react';
import WhyChooseus from './new-ui/whyChooseus';
import Logodesignslider from './logo-design-slider';

function LogoDesignPage() {
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
        setPagedata
    } = useContext(MenuContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/webdads2u-logo-design.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);
                setPagedata(data);
                setHeader_section(data.header_section);
                setSlider_section(data.slider_section);
                setSlider_section2(data.slider2_section);
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
            <Box sx={{ overflow: 'hidden' }}>
                <LogoDesignBanner />
                <ClientLogoSlider />
                <BrochureDescription />
                <LogoDesignCard />
                <GraphicLogoDesign />
                {/* <Brochuregallery /> */}
                <Logodesignslider />
                <ProfessionalExperienced />
                <WhyChooseus />
                <LogoTimeline />
                <AmazingWebDesign />
                {/* <ConnectWith /> */}
                <BrochureFaq />
            </Box>
        </>
    );
}

export default LogoDesignPage;
