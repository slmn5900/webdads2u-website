'use client';
import React from 'react';
import Brochuregallery from '../../../components/ui/Brochuregallery';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureDescription from '../../../components/ui/BrochureDescription';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import GraphicLogoDesign from '../../../components/ui/Graphic-Logo-Design/GraphicLogoDesign';
import ConnectWith from '../../../components/ui/ConnectWith';
import LogoDesignBanner from './logo-design-banner';
import LogoDesignCard from './logo-design-card';
import ProfessionalExperienced from './Professional-Experienced';
import LogoTimeline from './logo-time-line';
import { Box } from '@mui/material';
import { MenuContext } from '../../../layout/context/menucontext';
import { useContext } from 'react';
import { useEffect } from 'react';

function LogoDesignPage() {

    const { pagedata, setPagedata } = useContext(MenuContext);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/webdads2u-logo-design.json');
                const data = await response.json();
                setPagedata(data);
                console.log(data, 'data');
            } catch (error) {
                console.log(error, 'error');
            }
        };
        getdata();
    }, []);


    return (
        <>
            <Box sx={{ overflow: "hidden" }}>
                <LogoDesignBanner />
                <ClientLogoSlider />
                <BrochureDescription />
                <LogoDesignCard />
                <GraphicLogoDesign />
                <Brochuregallery />
                <ProfessionalExperienced />
                <GraphicLogoDesign />
                <LogoTimeline />
                <AmazingWebDesign />
                <ConnectWith />
                <BrochureFaq />
            </Box>
        </>

    );
}

export default LogoDesignPage;
