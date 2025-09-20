'use client';
import React, { useContext, useEffect } from 'react';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureDescription from '../../../components/ui/BrochureDescription';
import GiftCardSection from './GiftCardSection';
import RecentCreations from './RecentCreations';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import FreeConsultation from '../../../components/ui/FreeConsultation';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import { MenuContext } from '../../../layout/context/menucontext';
import { Box } from '@mui/material';

export default function CorporateGiftDesign() {
    const { setHeader_section, setOur_Creations, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section, setAmazingcard_section, setWork_section, setChoose_section, setConsultation_section, setQna_section } =
        useContext(MenuContext);
    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/corporate-gifts-design.json');
                const data = await response.json();
                console.log(data.ourrecent_section, 'data');
                setHeader_section(data?.header_section);
                setSlider_section(data?.slider_section);
                setCompany_section(data?.company_section);
                setDesign_section(data?.design_section);
                setOur_Creations(data?.ourrecent_section);
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
            <BrochureDescription />
            <GiftCardSection />
            <RecentCreations />
            <Box sx={{ py: 4 }}>
                <AmazingWebDesign />
            </Box>
            <FreeConsultation />
            <BrochureFaq />
        </div>
    );
}
