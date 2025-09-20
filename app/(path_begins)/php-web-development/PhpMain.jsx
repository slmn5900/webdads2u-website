'use client';
import React, { useContext, useEffect } from 'react';
import './php-web-development.css';
import PhpWebDevelopmentBanner from './php-web-development-banner';
import Developmentcompanyinchennai from './Development-company-in-Chennai';
import Phpcardhover from './php-card-hover';
import Optforphp from './Opt-For-PHP';
import BenefitsofPHP from './Benefits-of-PHP';
import Newtechnologies from './New-Technologies';
import Phpframeworks from './Php-Frameworks';
import Phpframeworkscard from './Php-Frameworks-card';
import Frequentlyphp from './Frequently-php';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
import BrochureFaq from '../../../components/ui/BrochureFaq';

const PhpMain = () => {
    const { setPagedata, setHeader_section, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section, setAmazingcard_section, setWork_section, setChoose_section, setConsultation_section, setQna_section } =
        useContext(MenuContext);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/php-web-development.json');
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
            {/* <PhpWebDevelopmentBanner /> */}
            <Developmentcompanyinchennai />
            <Phpcardhover />
            <Optforphp />
            <BenefitsofPHP />
            {/* < /> */}
            <Newtechnologies />
            <Phpframeworks />
            <Phpframeworkscard />
            {/* <Frequentlyphp /> */}
            <BrochureFaq />
        </section>
    );
};

export default PhpMain;
