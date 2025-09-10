// "use client"
// import React from 'react'
// import "./contentwriting.scss"
// import ContentwritingHero from './ContentwritingHero'
// const ContenetWriting = () => {
//   return (
//    <>
//     <ContentwritingHero/>
//    </>
//   )
// }

// export default ContenetWriting

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './contentwriting.scss';
import { MenuContext } from '../../../layout/context/menucontext';

// Dynamically import the ContentwritingHero component with SSR set to false
const ContentwritingHero = dynamic(() => import('./ContentwritingHero'), {
    ssr: false
});

const ContenetWriting = () => {
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
                const response = await fetch('/inner-page-api/content-writing-service.json');
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
            <ContentwritingHero />
        </>
    );
};

export default ContenetWriting;
