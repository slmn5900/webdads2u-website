'use client';
import React, { useContext } from 'react';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import Streams from './Streams';
import AllRoundTool from './AllRoundTool';
import GraphicLogoDesign from '../../../components/ui/Graphic-Logo-Design/GraphicLogoDesign';
import WaveBox from './WaveBox';
import EmptyWave from './EmptyWave';
import CrmDevelopment from './CrmDevelopment';
import IndustryCRMSection from './IndustryCRMSection';
import ERPDevelopment from './ERPDevelopment ';
import OurFullySection from './OurFullySection';
import ErpProcessSection from './ErpProcessSection';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import { useEffect } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

export default function CrmErpdevelopment() {
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

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/crm-erp-development.json');
                const data = await response.json();
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
                setPagedata(data);
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
            <Streams />
            <AllRoundTool />
            <GraphicLogoDesign />
            <WaveBox />
            <EmptyWave />
            <CrmDevelopment />
            <IndustryCRMSection />
            <ERPDevelopment />
            <OurFullySection />
            <EmptyWave />
            <ErpProcessSection />
            <BrochureFaq />
        </div>
    );
}
