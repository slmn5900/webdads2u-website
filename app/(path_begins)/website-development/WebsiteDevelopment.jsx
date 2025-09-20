// 'use client';
// import React, { useContext, useEffect, useState } from 'react';
// import Banner from './new-ui/Banner';
// import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
// import OurStreams from './new-ui/OurStreams';
// import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
// import WebTabSection from './new-ui/WebTabSection';
// import Subscribe from './new-ui/Subscribe';
// import { MenuContext } from '../../../layout/context/menucontext';
// import Development from './new-ui/development';

// export default function WebsiteDevelopment() {
//     const {
//         header_section,
//         setSlider_section2,
//         setHeader_section,
//         setSlider_section,
//         setCompany_section,
//         setDesign_section,
//         setList_section,
//         setAmazing_section,
//         setAmazingcard_section,
//         setWork_section,
//         setChoose_section,
//         setConsultation_section,
//         setQna_section
//     } = useContext(MenuContext);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const getdata = async () => {
//             try {
//                 const response = await fetch('/inner-page-api/website-development.json');
//                 const data = await response.json();
//                 console.log(data, 'data');
//                 setData(data);
//                 setHeader_section(data.header_section);
//                 setSlider_section(data.section_2);
//                 setSlider_section2(data.slider2_section);
//                 setCompany_section(data.company_section);
//                 setDesign_section(data.design_section);
//                 setList_section(data.list_section);
//                 setAmazing_section(data.amazing_section);
//                 setAmazingcard_section(data.section_5);
//                 setWork_section(data.work_section);
//                 setChoose_section(data.choose_section);
//                 setConsultation_section(data.consultation_section);
//                 setQna_section(data.qna_section);
//             } catch (error) {
//                 console.log(error, 'error');
//             }
//         };
//         getdata();
//     }, []);

//     return (
//         <>
//             <Banner />
//             <ClientLogoSlider />
//             <OurStreams />
//             {/* <BrochureDescription /> */}
//             <AmazingWebDesign />
//             <WebTabSection />
//             <Development data={data?.section_7} />
//             <Subscribe />
//         </>
//     );
// }
'use client';
import React, { useContext, useEffect, useState } from 'react';
import Banner from './new-ui/Banner';
import ClientLogoSlider from '../../../components/ui/client-logo-slider/ClientLogoSlider';
import OurStreams from './new-ui/OurStreams';
import AmazingWebDesign from '../../../components/ui/AmazingWebDesign';
import WebTabSection from './new-ui/WebTabSection';
import Subscribe from './new-ui/Subscribe';
import { MenuContext } from '../../../layout/context/menucontext';
import Development from './new-ui/development';
import { CircularProgress, Box } from '@mui/material';
import WebdevService from './WebdevService';

export default function WebsiteDevelopment() {
    const { setSlider_section2, setHeader_section, setSlider_section, setCompany_section, setDesign_section, setList_section, setAmazing_section, setAmazingcard_section, setWork_section, setChoose_section, setConsultation_section, setQna_section } =
        useContext(MenuContext);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // <-- loader state

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch('/inner-page-api/website-development.json');
                const data = await response.json();
                console.log(data, 'data');
                setData(data);

                // Set context sections
                setHeader_section(data.header_section);
                setSlider_section(data.section_2);
                setSlider_section2(data.slider2_section);
                setCompany_section(data.company_section);
                setDesign_section(data.design_section);
                setList_section(data.list_section);
                setAmazing_section(data.amazing_section);
                setAmazingcard_section(data.section_5);
                setWork_section(data.work_section);
                setChoose_section(data.choose_section);
                setConsultation_section(data.consultation_section);
                setQna_section(data.qna_section);
            } catch (error) {
                console.log(error, 'error');
            } finally {
                setLoading(false); // <-- hide loader after fetch
            }
        };
        getdata();
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Banner />
            <ClientLogoSlider />
            <OurStreams />
            <WebdevService />
            {/* <BrochureDescription /> */}
            <AmazingWebDesign />
            <WebTabSection />
            <Development data={data?.section_7} />
            <Subscribe />
        </>
    );
}
