// "use client"
// import React from 'react'
// import './domainregistration.css'
// import Domainregistrationbanner from './domain-registration-banner'
// import Amplifyingyouronline from './Amplifying-Your-Online'
// import Domainname from './Domain-Name'
// import Comprehensivedigital from './Comprehensive-Digital'
// import SocialMedia from '../../../components/common/SocialMedia'
// import Rightdomain from './Right-Domain'
// import Lookingdomain from './Looking-Domain'
// import Fqdomainregistration from './Fq-domain-registration'
// const DomainRegistration = () => {
//   return (
//     <>
//      <Domainregistrationbanner />
//       <Amplifyingyouronline />
//       <Domainname />
//       <Comprehensivedigital />
//       <SocialMedia />
//       <Rightdomain />
//       <Lookingdomain />
//       <Fqdomainregistration />
//     </>
//   )
// }

// export default DomainRegistration

'use client';
import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import './domainregistration.css';
import { MenuContext } from '../../../layout/context/menucontext';

// Dynamically import each component with SSR set to false
const Domainregistrationbanner = dynamic(() => import('./domain-registration-banner'), { ssr: false });
const Banner = dynamic(() => import('../../../components/ui/banner/Banner'), { ssr: false });
const Amplifyingyouronline = dynamic(() => import('./Amplifying-Your-Online'), { ssr: false });
const Domainname = dynamic(() => import('./Domain-Name'), { ssr: false });
const Comprehensivedigital = dynamic(() => import('./Comprehensive-Digital'), { ssr: false });
const SocialMedia = dynamic(() => import('../../../components/common/SocialMedia'), { ssr: false });
const Rightdomain = dynamic(() => import('./Right-Domain'), { ssr: false });
const Lookingdomain = dynamic(() => import('./Looking-Domain'), { ssr: false });
const Fqdomainregistration = dynamic(() => import('./Fq-domain-registration'), { ssr: false });

const DomainRegistration = () => {
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
                const response = await fetch('/inner-page-api/domain-registration.json');
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
        <>
            <Banner />
            {/* <Domainregistrationbanner /> */}
            <Amplifyingyouronline />
            <Domainname />
            <Comprehensivedigital />
            <Rightdomain />
            <Lookingdomain />
            <Fqdomainregistration />
            <SocialMedia />
        </>
    );
};

export default DomainRegistration;
