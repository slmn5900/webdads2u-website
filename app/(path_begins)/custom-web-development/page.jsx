'use client';
import React from 'react';
import './Customwebdevelopment.css';
import Customwebdevelopmentbanner from './custom-web-development-banner';
import Customwebsite from './Custom-Website';
import Createinteractive from './Create-interactive';
import Customwebsitedevelopment from './Custom-Website-Development';
import Scalableweb from './Scalable-Web';
import Customwebdevelopmentservices from './Custom Web-Development-Services';
import Lookingforcustomwebsite from './Looking-for-Custom-Website';
import Frequentlyaskedquestionscustomwebsite from './Frequently-Asked-Questions-Custom-Website';
import SocialMedia from '../../../components/common/SocialMedia';
export const metadata = {
    title: 'Custom Website Development Company In Chennai',
    description: 'Elevate your online presence with tailored custom website development services. We create unique, responsive websites to meet your specific needs and goals.',
    keywords: 'custom website development company in chennai,custom website development company,custom website development '
};

const page = () => {
    return (
        <section>
            <Customwebdevelopmentbanner />
            <Customwebsite />
            <Createinteractive />
            <Customwebsitedevelopment />
            <Scalableweb />
            <Customwebdevelopmentservices />
            <Lookingforcustomwebsite />
            <Frequentlyaskedquestionscustomwebsite />
            <SocialMedia />
        </section>
    );
};

export default page;
