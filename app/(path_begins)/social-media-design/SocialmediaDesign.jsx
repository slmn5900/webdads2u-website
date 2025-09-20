// 'use client';
// import React, { useContext } from 'react';
// import SocialmediaHero from './SocialmediaHero';
// import Banner from '../../../components/ui/banner/Banner';
// import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
// import BrochureDesign from '../../../components/ui/BrochureDesign';
// import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
// import Brochuregallery from '../../../components/ui/Brochuregallery';
// import BrochureFaq from '../../../components/ui/BrochureFaq';
// import ConnectWith from '../../../components/ui/ConnectWith';
// import WhyChooseSection from '../../../components/ui/WhyChooseSection';
// import { MenuContext } from '../../../layout/context/menucontext';
// import { useEffect } from 'react';

// export default function SocialmediaDesign() {
//     const { setHeader_section, setQna_section, setConsultation_section, setChoose_section, setWork_section, setAmazingcard_section, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section } =
//         useContext(MenuContext);

//     useEffect(() => {
//         const getdata = async () => {
//             try {
//                 const response = await fetch('/inner-page-api/social-media-design.json');
//                 const data = await response.json();

//                 setHeader_section(data.header_section);
//                 setSlider_section(data.slider_section);
//                 setCompany_section(data.company_section);
//                 setDesign_section(data.design_section);
//                 setList_section(data.list_section);
//                 setAmazing_section(data.section_3);
//                 setAmazingcard_section(data.section_4);
//                 setWork_section(data.section_5);
//                 setChoose_section(data.choose_section);
//                 setConsultation_section(data.consultation_section);
//                 setQna_section(data.qna_section);
//             } catch (error) {
//                 console.log(error, 'error');
//             }
//         };
//         getdata();
//     }, []);

//     //D:\ProN\webdads2u\public\inner-page-api\social-media-design.json

//     return (
//         <>
//             <Banner />
//             <ClientLogoSlider />
//             <WhyChooseSection />
//             {/* <BrochureDesign /> */}
//             <AmazingWebDesign />
//             <Brochuregallery />
//             {/* <ConnectWith /> */}
//             <BrochureFaq />
//         </>
//     );
// }

'use client';
import React, { useContext, useEffect } from 'react';
// import SocialmediaHero from './SocialmediaHero';
import Banner from '../../../components/ui/banner/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
// import BrochureDesign from '../../../components/ui/BrochureDesign';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import Brochuregallery from '../../../components/ui/Brochuregallery';

// import ConnectWith from '../../../components/ui/ConnectWith';
import WhyChooseSection from '../../../components/ui/WhyChooseSection';
import { MenuContext } from '../../../layout/context/menucontext';

// ✅ Import JSON directly (static safe)
import jsonData from '../../../public/inner-page-api/social-media-design.json';
import BrochureFaq from '../../../components/ui/BrochureFaq';

export default function SocialmediaDesign() {
    const { setHeader_section, setQna_section, setConsultation_section, setChoose_section, setWork_section, setAmazingcard_section, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section } =
        useContext(MenuContext);

    useEffect(() => {
        const Fetch = async () => {
            try {
                const res = await fetch('/inner-page-api/social-media-design.json'); // using imported JSON
                const data = await res.json();
                console.log(data, 'data');

                setHeader_section(data.header_section);
                setSlider_section(data.slider_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setAmazing_section(data.section_3);
                setAmazingcard_section(data.section_4);
                setWork_section(data.section_5);
                setChoose_section(data.choose_section);
                setConsultation_section(data.consultation_section);
                setQna_section(data.qna_section);
            } catch (error) {
                console.error(error, 'error loading social media JSON');
            }
        };
        Fetch();
    }, []);

    return (
        <>
            <Banner />
            <ClientLogoSlider />
            <WhyChooseSection />
            {/* <BrochureDesign /> */}
            <AmazingWebDesign />
            <Brochuregallery />
            {/* <ConnectWith /> */}
            <BrochureFaq />
        </>
    );
}
