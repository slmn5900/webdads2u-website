// "use client"
// import React from 'react'
// import ReactnativeHero from './ReactnativeHero'
// import "./reactnative.scss"
// import ReactnativeFaq from './ReactnativeFaq'
// const ReactnativeApp = () => {
//   return (
//     <>
//       <ReactnativeHero />
//       <ReactnativeFaq />
//     </>
//   )
// }

// export default ReactnativeApp

'use client';
import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './reactnative.scss';
import { MenuContext } from '../../../layout/context/menucontext';
import BrochureFaq from '../../../components/ui/BrochureFaq';

// Dynamically import components with SSR set to false
const ReactnativeHero = dynamic(() => import('./ReactnativeHero'), { ssr: false });
const ReactnativeFaq = dynamic(() => import('./ReactnativeFaq'), { ssr: false });

const ReactnativeApp = () => {
    const { setPagedata, setHeader_section, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section, setAmazingcard_section, setWork_section, setChoose_section, setConsultation_section, setQna_section } =
        useContext(MenuContext);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/react-native-app-development.json');
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
            <ReactnativeHero />
            <BrochureFaq />
        </>
    );
};

export default ReactnativeApp;
