'use client';
import React, { useContext, useState } from 'react';
import Banner from './new-ui/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureDescription from '../../../components/ui/BrochureDescription';
import FlyerBoxDesign from './new-ui/FlyerBoxDesign';
import ConnectWith from '../../../components/ui/ConnectWith';
import VariousIndustries from './new-ui/VariousIndustries';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import Brochuregallery from '../../../components/ui/Brochuregallery';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import { useEffect } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
import { Box } from '@mui/material';

export default function FlyerDesign() {
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
        setQna_section
    } = useContext(MenuContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/webdads2u-flyer-design.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);
                setHeader_section(data.header_section);
                setSlider_section(data.slider_section);
                setSlider_section2(data.slider2_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setAmazing_section(data.amazing_section);
                setAmazingcard_section(data.amazingcard_section);
                setWork_section(data.section_8);
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
            <Box overflowX={'none'} sx={{ height: '100vh' }}>
                <Banner />
            </Box>
            <ClientLogoSlider />
            <BrochureDescription />
            <FlyerBoxDesign />
            {/* <ConnectWith /> */}
            <VariousIndustries />

            <AmazingWebDesign />

            <Brochuregallery />
            <BrochureFaq />
        </>
    );
}
