import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slider from '../../../components/common/Slider-image';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import Brochuregallery from '../../../components/ui/Brochuregallery';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureDescription from '../../../components/ui/BrochureDescription';
import BrochureDesign from '../../../components/ui/BrochureDesign';
import InAdditionSection from '../../../components/ui/addition-design/InAdditionSection';
import WhyChooseSection from '../../../components/ui/WhyChooseSection';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import WhyChooseServices from '../../../components/ui/whychooseservices/WhyChooseServices';
import FreeConsultation from '../../../components/ui/FreeConsultation';
import ConnectWith from '../../../components/ui/ConnectWith';
import { MenuContext } from '../../../layout/context/menucontext';

function BrochuredesignHero() {
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
                const response = await fetch('/inner-page-api/brochure.json');
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
        <>
            <Banner />
            <ClientLogoSlider />
            <BrochureDescription />
            <BrochureDesign />
            <InAdditionSection />
            <WhyChooseSection />
            <AmazingWebDesign />
            <Brochuregallery />
            <WhyChooseServices />
            {/* <ConnectWith /> */}
            <FreeConsultation />
            <BrochureFaq />
        </>
    );
}

export default BrochuredesignHero;
