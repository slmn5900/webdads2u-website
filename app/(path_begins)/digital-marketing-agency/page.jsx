'use client';
import React from 'react';
import './digital-marketing-agency.css';
import Fqdigitalmarketingagency from './FQdigital-marketing-agency';
import SocialMedia from '../../../components/common/SocialMedia';
import Socialmediamarketing from './Social-Media-Marketing';
import Socialmediamarketingtwo from './Social-Media-Marketing-two';
import Inorganicdigitalmarketing from './Inorganic-Digital-Marketing';
import Digitalmarketingactivities from './Digital-Marketing-Activities';
import Digitalmarketingstrategy from './Digital-Marketing-Strategy';
import Digitalmarketingagencybanner from './digital-marketing-agency-banner';
import Advantagesgoogleanalytics from './Advantages-Google-Analytics';
import Digitalmarketingagencycounter from './digital-marketing-agency-counter';
export const metadata = {
    title: 'Digital Marketing Agency In Chennai',
    description: 'We offer a top-notch digital marketing agency in chennai to enhance your digital presence. Get more online visibility and growth today!',
    keyword:
        'digital marketing agency in chennai,digital marketing agency,digital marketing service,digital marketing agency,best digital marketing company in chennai,digital marketing agency in chennai,online marketing in chennai,digital marketing services in chennai'
};

const page = () => {
    return (
        <div>
            <Digitalmarketingagencybanner />
            <Digitalmarketingagencycounter />
            <Digitalmarketingstrategy />
            <Digitalmarketingactivities />
            <Inorganicdigitalmarketing />
            <Socialmediamarketingtwo />
            <Advantagesgoogleanalytics />
            <Socialmediamarketing />
            <SocialMedia />
            <Fqdigitalmarketingagency />
        </div>
    );
};

export default page;
