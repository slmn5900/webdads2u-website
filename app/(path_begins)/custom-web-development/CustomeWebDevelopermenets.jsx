'use client';
import React, { useContext, useEffect, useState } from 'react';
import Customwebdevelopmentbanner from './customwebdevelopmentbanner';
import Customwebsite from './CustomWebsite';
import Createinteractive from './Createinteractive';
import Customwebsitedevelopment from './CustomWebsiteDevelopment';
import Scalableweb from './ScalableWeb';
import Customwebdevelopmentservices from './CustomWebDevelopmentServices';
import Lookingforcustomwebsite from './LookingforCustomWebsite';
import Frequentlyaskedquestionscustomwebsite from './FrequentlyAskedQuestionsCustomWebsite';
import SocialMedia from '../../../components/common/SocialMedia';
import { MenuContext } from '../../../layout/context/menucontext';
import Banner from '../../../components/ui/banner/Banner';
import BrochureFaq from '../../../components/ui/BrochureFaq';
export default function CustomeWebDevelopermenets() {
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
                const response = await fetch('/inner-page-api/custom-web-development.json');
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
            <>
                {/* <Banner /> */}
                <Customwebdevelopmentbanner />
                <Customwebsite />
                <Createinteractive />
                <Customwebsitedevelopment />
                <Scalableweb />
                <Customwebdevelopmentservices />
                <Lookingforcustomwebsite />

                <BrochureFaq />
                {/* <Frequentlyaskedquestionscustomwebsite /> */}
                {/* <SocialMedia /> */}
            </>
        </div>
    );
}
