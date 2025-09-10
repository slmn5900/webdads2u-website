// "use client"
// import React from 'react'
// import './mobile-app-development.css'
// import OurStreams from './Our-Streams'
// import OurStreamscard from './OurStreams-card'
// import SearchingBestobile from './Searching-Best-obile'
// import OffshoreMobileApp from './Offshore-Mobile-App'
// import AppDesignProcess from './App-Design-Process'
// import Industries from './Industries'
// import Businesseschoose from './Businesses-choose'
// import AppDevelopmentServices from './AppDevelopmentServices'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Mobileappdevelopmentbanner from './mobile-app-development-banner'

// const MoblleMain = () => {
//   return (
//     <div>
//       <Mobileappdevelopmentbanner />
//       <OurStreams />
//       <OurStreamscard />
//       <SearchingBestobile />
//       <OffshoreMobileApp />
//       <AppDesignProcess />
//       <Industries />
//       <Businesseschoose />
//       <SocialMedia />
//       <AppDevelopmentServices />
//     </div>
//   )
// }

// export default MoblleMain
'use client';
import React, { useEffect, useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import './mobile-app-development.css';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import ConnectWith from '../../../components/ui/ConnectWith';
import { MenuContext } from '../../../layout/context/menucontext';

// Dynamically import each component with SSR set to false
const OurStreams = dynamic(() => import('./Our-Streams'), { ssr: false });
const OurStreamscard = dynamic(() => import('./OurStreams-card'), { ssr: false });
const SearchingBestobile = dynamic(() => import('./Searching-Best-obile'), { ssr: false });
const OffshoreMobileApp = dynamic(() => import('./Offshore-Mobile-App'), { ssr: false });
const AppDesignProcess = dynamic(() => import('./App-Design-Process'), { ssr: false });
const Industries = dynamic(() => import('./Industries'), { ssr: false });
const Businesseschoose = dynamic(() => import('./Businesses-choose'), { ssr: false });
const AppDevelopmentServices = dynamic(() => import('./AppDevelopmentServices'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Mobileappdevelopmentbanner = dynamic(() => import('./mobile-app-development-banner'), { ssr: false });

const MoblleMain = () => {
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
        setourstreams,
        setBest_mobile_section,
        setPagedata
    } = useContext(MenuContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/mobile-app-development.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);
                setBest_mobile_section(data.best_mobile_section);
                setHeader_section(data.header_section);
                setSlider_section(data.slider_section);
                setSlider_section2(data.slider2_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setourstreams(data.our_streams);
                setPagedata(data);
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
            <OurStreams />
            <OurStreamscard />
            <SearchingBestobile />

            <OffshoreMobileApp />

            <AppDesignProcess />

            <Industries />
            <Businesseschoose />
            {/* <ConnectWith /> */}
            {/* <AmazingWebDesign /> */}
            <AppDevelopmentServices />
        </div>
    );
};

export default MoblleMain;
