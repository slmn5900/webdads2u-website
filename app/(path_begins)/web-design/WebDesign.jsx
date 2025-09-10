'use client';
import React, { useContext, useEffect } from 'react';
import Webhero from './Webhero';
import './webdesign.scss';
import WebDesignHero from './newdesign/WebDesignHero';
import TrustedBusinesses from './newdesign/TrustedBusinesses';
import WhyChooseUs from './newdesign/WhyChooseUs';
import CounterSection from './newdesign/CounterSection';
import WhyChooseFeatures from './newdesign/WhyChooseFeatures';
import TechnologyStackSection from './newdesign/TechnologyStackSection';
import PortfolioSection from './newdesign/PortfolioSection';
import Streams from './newdesign/Streams';
import CreatingProcess from './newdesign/CreatingProcess';
import Counter from '../../../components/Counter';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from './newdesign/Banner';

const WebDesign = () => {
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
                const response = await fetch('/inner-page-api/webdesign.json');
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
            {/* <Webhero/> */}
            {/* <WebDesignHero /> */}
            <Banner />
            {/* <Banner /> */}
            <TrustedBusinesses />
            <WhyChooseUs />
            <Counter />
            <Streams />
            {/* <WhyChooseFeatures /> */}
            <TechnologyStackSection />
            <PortfolioSection />
            <CreatingProcess />
        </>
    );
};

export default WebDesign;
