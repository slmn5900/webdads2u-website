'use client';

import React from 'react';
import Fqdigitalmarketingagency from './FQdigitalmarketingagency';
import SocialMedia from '../../../components/common/SocialMedia';
import Socialmediamarketing from './SocialMediaMarketing';
import Socialmediamarketingtwo from './SocialMediaMarketingtwo';
import Inorganicdigitalmarketing from './InorganicDigitalMarketing';
import Digitalmarketingactivities from './DigitalMarketingActivities';
import Digitalmarketingstrategy from './DigitalMarketingStrategy';
import Digitalmarketingagencybanner from './digitalmarketingagencybanner';
import Advantagesgoogleanalytics from './AdvantagesGoogleAnalytics';
import Digitalmarketingagencycounter from './digitalmarketingagencycounter';
export default function DigitalMarketingagencys() {
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
}
