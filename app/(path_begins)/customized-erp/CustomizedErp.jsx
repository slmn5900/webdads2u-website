// "use client"
// import React from 'react'
// import CustomerpHero from '../customized-erp/CustomerpHero'

// import "./customeerp.scss"
// import CustomerpFaq from './CustomerpFaq'
// const CustomizedErp = () => {
//   return (
//     <>

//     <CustomerpHero />
//     <CustomerpFaq />
//     </>
//   )
// }

// export default CustomizedErp

// 'use client';
// import React from 'react';
// import dynamic from 'next/dynamic';
// import './customeerp.scss';

// // Dynamically import components with SSR set to false
// const CustomerpHero = dynamic(() => import('../customized-erp/CustomerpHero'), { ssr: false });
// const CustomerpFaq = dynamic(() => import('./CustomerpFaq'), { ssr: false });
// const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
// const CustomizedErp = () => {
//     return (
//         <>
//             <CustomerpHero />
//             <CustomerpFaq />
//             <SocialMedia />
//         </>
//     );
// };

// export default CustomizedErp;

'use client';
import React, { useContext, useState } from 'react';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import BrochureDescription from '../../../components/ui/BrochureDescription';
import CustumMadErp from './new-ui/CustumMadErp';
import GraphicLogoDesign from '../../../components/ui/Graphic-Logo-Design/GraphicLogoDesign';
import ConnectWith from '../../../components/ui/ConnectWith';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import FreeConsultation from '../../../components/ui/FreeConsultation';
import BrochureFaq from '../../../components/ui/BrochureFaq';
import { useEffect } from 'react';
import { MenuContext } from '../../../layout/context/menucontext';

export default function CustomizedErp() {
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
                const response = await fetch('/inner-page-api/customized-erp.json');
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
            <CustumMadErp />
            <GraphicLogoDesign />
            {/* <ConnectWith /> */}
            <AmazingWebDesign />
            <FreeConsultation />
            <BrochureFaq />
        </div>
    );
}
