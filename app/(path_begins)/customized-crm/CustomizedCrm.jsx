'use client';
import React, { useContext, useState } from 'react';
import CustomizeErpHero from './new-ui/CustomizeErpHero';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import CustomCrmDescription from './new-ui/CustomCrmDescription';
import { ConnectWithoutContact } from '@mui/icons-material';
import ConnectWith from '../../../components/ui/ConnectWith';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import FreeConsultation from '../../../components/ui/FreeConsultation';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import { useEffect } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';
import Development from '../crm-erp-development/ERPDevelopment ';
import WhyDoYou from './new-ui/WhyDoYou';

export default function CustomizedCrm() {
    const {
        setPagedata,
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
                const response = await fetch('/inner-page-api/customized-crm.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);
                setHeader_section(data?.header_section);
                setSlider_section(data?.slider_section);
                setSlider_section2(data?.slider2_section);
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
            <CustomizeErpHero />
            <ClientLogoSlider />
            <CustomCrmDescription />
            <Development data={data?.development_section} />
            <AmazingWebDesign />
            <FreeConsultation />
            <WhyDoYou />

            <BrochureFaq />
        </div>
    );
}
